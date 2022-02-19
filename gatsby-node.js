const { createFilePath } = require("gatsby-source-filesystem");

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

// POW!-website/gatsby-node.js
async function bakeMarkdownNodesIntoPages({ graphql, actions }) {
  //  only create pages for markdown pages and not sections.
  // To know the difference between a markdown page and section we can decide that
  // only index.md qualify as a page. Everything else is a markdown section content.
  const { data } = await graphql(`
    {
      supplies: allMarkdownRemark(
        filter: { fields: { slug: { eq: "/index/" } } }
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);
  console.log(data.supplies);
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

exports.onCreateNode = async (gatsbyUtils) => {
  await Promise.all([slugifyMarkdownRemarkNode(gatsbyUtils)]);
};

exports.createPages = async (gatsbyUtils) => {
  await Promise.all([bakeMarkdownNodesIntoPages(gatsbyUtils)]);
};
