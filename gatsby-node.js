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
// I will delete all these comments and rename everything after my
// livestream on Thursday Feb 24.
// badly baked GingerBreadPages 🏠
// Only bake pages for markdown pages 📄 and not sections. ㊙️ 📟
// 0. Only index.md 📄
async function bakeMarkdownNodesIntoPages({ graphql, actions }) {
  // 1. filter ☕
  //    supplies: not allMarkdownRemark.nodes 💰
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

  // 2. bakingsong 🎵 🙀
  const bakingSong = require.resolve("./src/templates/pageTemplate.js");
  // 3. aromaNode 🍰
  // Loop over the supplies.nodes and forEach((aromaNode and bake a page
  data.supplies.nodes.forEach((aromaNode) => {
    console.log(aromaNode.fields.slug, "💀📄");

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
  slugifyMarkdownRemarkNode(gatsbyUtils);
};

// 1.2.3 – A.B.C. – Gingerbread house

// 1. Supplies: allMarkdownRemark.node
// 2. Bakingsong = bakingSong.js
// 3. Loop over the supply node and create a page

// A. Ahoy! Aroma path!
// B. BakingSong is a component
// C. Catsby node.id is context
exports.createPages = async (gatsbyUtils) => {
  bakeMarkdownNodesIntoPages(gatsbyUtils);
};
