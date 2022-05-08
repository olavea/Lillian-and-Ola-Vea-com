/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.com/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin");

exports.sourceNodes = async (gatsbyUtils) => {
  // Get 1 video ready to be sourced into our GraphQL-Gatsby-data river without sinking
  await pugNode(gatsbyUtils);
};

async function pugNode(gatsbyUtils) {
  const { actions, createContentDigest } = gatsbyUtils;
  const POW_TUBE_ID = "UGq8cnNTbwI";
  actions.createNode({
    id: POW_TUBE_ID,
    internal: {
      type: "powTubeOemBed",
      contentDigest: createContentDigest(id),
    },
  });
  console.log("⛵💀 Yo-Ho Yo-Ho a PiRATEs nodeID 💰", nodeID);

  //          i. internal, because it is NOT polite to have `contentDigest` and `type` under `id`
}

// // constants for your GraphQL Post and Author types
// const POST_NODE_TYPE = `Post`;

// exports.sourceNodes = async ({
//   actions,
//   createContentDigest,
//   createNodeId,
//   getNodesByType,
// }) => {
//   const { createNode } = actions;

//   const data = {
//     posts: [
//       { id: 1, description: `Hello world!` },
//       { id: 2, description: `Second post!` },
//     ],
//   };

//   // loop through data and create Gatsby nodes
//   data.posts.forEach((post) =>
//     createNode({
//       ...post,
//       id: createNodeId(`${POST_NODE_TYPE}-${post.id}`),
//       parent: null,
//       children: [],
//       internal: {
//         type: POST_NODE_TYPE,
//         content: JSON.stringify(post),
//         contentDigest: createContentDigest(post),
//       },
//     })
//   );

//   return;
// };
