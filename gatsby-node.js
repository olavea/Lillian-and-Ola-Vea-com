const { createFilePath } = require("gatsby-source-filesystem");

// POW!-website/gatsby-node.js
async function bakeMarkdownNodesIntoPages({ graphql, actions }) {
  const { data } = await graphql(`
    {
      supplies: allMarkdownRemark {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);
  const pageTemplate = require.resolve("./src/templates/pageTemplate.js");
  data.supplies.nodes.forEach((node) => {
    actions.createPage({
      path: node.fields.slug,
      component: pageTemplate,
      context: {
        catsby: node.id,
      },
    });
  });
}

async function slugifyMarkdownRemarkNode({ actions, node, getNode }) {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value: slug,
    });
  }
}

exports.onCreateNode = async (gatsbyUtils) => {
  await Promise.all([slugifyMarkdownRemarkNode(gatsbyUtils)]);
};

// exports.createPages = async (gatsbyUtils) => {
//   await Promise.all([bakeMarkdownNodesIntoPages(gatsbyUtils)]);
// };
