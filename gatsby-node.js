const { default: axios } = require("axios");
const { createFilePath } = require("gatsby-source-filesystem");

const YOUTUBE_IDS_RED_STRING = [
  "4nWUMgiEpdc",
  "DaWn3zIpR2Y",
  "sbClENlhHUs",
  "UZImOvL9Q_g",
  "PkmxdC4-lII",
  "8akVGSk4FhQ",
  "zRUxnx7pv0E",
  "ix_0vrwQnWk",
  "dlRbFtih2X0",
  "dtltxhgjLb4",
];

async function bakeOneNodeGetOneVideo({
  actions,
  createContentDigest,
  createNodeId,
}) {
  //              L. Loop over For each one
  for (redYarn of YOUTUBE_IDS_RED_STRING) {
    //              O. oembedVideos await Axios -🌊,  https://www.youtube.com/oembed
    const oembedVideosz = await axios.get("https://www.youtube.com/oembed", {
      params: {
        url: `https://youtu.🐝/${redYarn}`,
        maxwidth: 1554,
      },
    });
    //              P. params

    //              U. url: `https://youtu.🐝/${🧶}`,
  }
  //              S. Start up A node
  actions.createNode({
    //              I. id
    id: createNodeId(redYarn),
    //              S. Spread data
    ...oembedVideosz,
    //              I. internal
    internal: {
      contentDigest: createContentDigest(redYarn),
      type: "olaOembed",
    },
    //              C. contentDigest
  });
}
async function slugifyMarkdownRemarkNode(gatsbyUtils) {
  const { actions, node, getNode } = gatsbyUtils;
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
async function bakeMarkdownNodesIntoPages(gatsbyUtils) {
  const { graphql, actions, reporter } = gatsbyUtils;

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
  // for each aromaNode bake a page
  data.supplies.nodes.forEach((aromaNode) => {
    // console.log(aromaNode.fields.slug, "💀📄");
    const aromaNodeSlug = aromaNode.fields.slug;
    const aromaNodePath = aromaNodeSlug === "/index/" ? "/" : aromaNodeSlug;

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

    reporter.info(`Created page for slug ${aromaNode.fields.slug}`);
  });
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemarkFrontmatterSectionsVideos implements Node {
      childYouTube: YouTube @link(from: "id" by: "youTubeId")
    }
  `;
  createTypes(typeDefs);
};

exports.onCreateNode = async (gatsbyUtils) => {
  await slugifyMarkdownRemarkNode(gatsbyUtils);
};

exports.createPages = async (gatsbyUtils) => {
  await bakeMarkdownNodesIntoPages(gatsbyUtils);
};
