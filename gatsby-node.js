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

exports.onCreateNode = async (gatsbyUtils) => {
  await Promise.all([slugifyMarkdownRemarkNode(gatsbyUtils)]);
};
