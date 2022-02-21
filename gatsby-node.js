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
// badly baked GingerBreadPages
// Only bake pages for markdown pages and not sections.
// Only index.md

async function bakeMarkdownNodesIntoPages({ graphql, actions }) {
  // 1. Supplies: not allMarkdownRemark.node
  const { data } = await graphql(`
    {
      supplies: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/index.md/" } }
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
  console.log(data.supplies.nodes);
  // 2. Bakingsong = pageTemplate.js
  const pageTemplate = require.resolve("./src/templates/pageTemplate.js");
  // 3. Loop over the supplies.nodes and bake a page
  data.supplies.nodes.forEach((aromaNode) => {
    console.log(aromaNode.fields.slug, "💀📄");
    actions.createPage({
      // A. AromaNode path!
      path: aromaNode.fields.slug,
      // B. BakingSong component
      component: pageTemplate,
      // C. CatsbyId node.id
      context: {
        catsbyId: aromaNode.id,
      },
    });
  });
}

exports.onCreateNode = async (gatsbyUtils) => {
  await Promise.all([slugifyMarkdownRemarkNode(gatsbyUtils)]);
};

// 1.2.3 – A.B.C. – Gingerbread house

// 1. Supplies: allMarkdownRemark.node
// 2. Bakingsong = bakingSong.js
// 3. Loop over the supply node and create a page

// A. Ahoy! Aroma path!
// B. BakingSong is a component
// C. Catsby node.id is context
exports.createPages = async (gatsbyUtils) => {
  await Promise.all([bakeMarkdownNodesIntoPages(gatsbyUtils)]);
};
