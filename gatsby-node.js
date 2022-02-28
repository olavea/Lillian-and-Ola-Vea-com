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

// 1.2.3 – A.B.C. – Gingerbread house
// 0. gatsbyUtils 🔧
async function bakeMarkdownNodesIntoPages({ graphql, actions }) {
  // 1. filter ☕ first
  const { data } = await graphql(`
    {
      supplies: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/index.md/" } }
      ) {
        nodes {
          id
          fileAbsolutePath
          fields {
            slug
          }
        }
      }
    }
  `);
  // 2. bakingSong 🎵 🦢
  const bakingSong = require.resolve("./src/templates/pageTemplate.js");
  // 3. aromaNode 🍰💰
  // Loop over the supplies.nodes and
  // forEach((aromaNode
  // bake a page
  // I forgot the supplies
  data.supplies.nodes.forEach((aromaNode) => {
    // console.log(aromaNode.fields.slug, "💀📄");
    const aromaNodePath =
      aromaNode.fields.slug === "/index/" ? "/" : aromaNode.fields.slug;
    actions.createPage({
      // A. aromaNodePath 🍰.🍓.🐛
      path: aromaNodePath,
      // B. bakingSong 🎵 🙀
      component: bakingSong,
      // C. catsbyId 😼🆔
      context: {
        catsbyId: aromaNode.id,
      },
    });
  });
}

exports.onCreateNode = async (gatsbyUtils) => {
  await slugifyMarkdownRemarkNode(gatsbyUtils);
};

exports.createPages = async (gatsbyUtils) => {
  await bakeMarkdownNodesIntoPages(gatsbyUtils);
};
