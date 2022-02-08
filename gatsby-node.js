// POW!-website/gatsby-node.js
async function bakeMarkdownNodesIntoPages({ graphql, actions }) {
  const pageTemplate = require.resolve("./src/templates/pageTemplate.js");
  const { data } = await graphql(`
    {
      supplies: allMarkdownRemark {
        nodes {
          id
        }
      }
    }
  `);
  data.supplies.nodes.forEach((node) => {
    actions.createPage({
      path: `/md/${node.id}`,
      component: pageTemplate,
      context: {
        catsby: node.id,
        fox: "Catsby looks tasty I getz hungry for kitten",
      },
    });
  });
}
exports.createPages = async (gatsbyUtils) => {
  await Promise.all([bakeMarkdownNodesIntoPages(gatsbyUtils)]);
};
