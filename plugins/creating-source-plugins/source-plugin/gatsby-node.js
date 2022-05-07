/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin");

const {
  ApolloClient,
  InMemoryCache,
  gql,
  split,
  HttpLink,
} = require("@apollo/client");
const { WebSocketLink } = require("@apollo/client/link/ws");
const { getMainDefinition } = require("@apollo/client/utilities");
const WebSocket = require("ws");
const fetch = require("node-fetch");

// constants for your GraphQL Post and Author types
const POST_NODE_TYPE = `Post`;

const client = new ApolloClient({
  link: split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    new WebSocketLink({
      uri: `ws://localhost:4000`, // or `ws://gatsby-source-plugin-api.glitch.me/`
      options: {
        reconnect: true,
      },
      webSocketImpl: WebSocket,
    }),
    new HttpLink({
      uri: "http://localhost:4000", // or `https://gatsby-source-plugin-api.glitch.me/`
      fetch,
    })
  ),
  cache: new InMemoryCache(),
});

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode, touchNode, deleteNode } = actions;

  const { data } = await client.query({
    query: gql`
      query {
        posts {
          id
          description
        }
      }
    `,
  });

  // loop through data and create Gatsby nodes
  data.posts.forEach((post) =>
    createNode({
      ...post,
      id: createNodeId(`${POST_NODE_TYPE}-${post.id}`),
      parent: null,
      children: [],
      internal: {
        type: POST_NODE_TYPE,
        content: JSON.stringify(post),
        contentDigest: createContentDigest(post),
      },
    })
  );

  return;
};
