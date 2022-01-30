// POW!-website plugins / local - source - youtube / gatsby - node.js;
const path = require("path");
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const IS_PROD = process.env.NODE_ENV === "production";

const axios = require("axios");

const fetchEmbed = async (id) => {
  const ytUrl = `https://youtu.be/${id}`;
  const { data } = await axios.get("https://www.youtube.com/oembed", {
    params: {
      url: ytUrl,
    },
  });
  //console.log(data);
  //console.log(id);
  return data;
};

async function prepYouTubeNode(
  id,
  { actions: { createNode }, getCache, createNodeId, createContentDigest }
) {
  const embedData = await fetchEmbed(id);
  //   console.log(embedData);
  const youTubeNodeId = createNodeId(`you-tube-${id}`);
  //https://i.ytimg.com/vi/Bk1jonYPFD4/hqdefault.jpg
  const imageFile = await createRemoteFileNode({
    url: embedData.thumbnail_url,
    parentNodeId: youTubeNodeId,
    getCache,
    createNode,
    createNodeId,
  });
  createNode({
    oEmbed: embedData,
    thumnail___NODE: imageFile.id,
    id: youTubeNodeId,
    internal: {
      contentDigest: createContentDigest(id),
      type: `YouTube`,
    },
  });
}

exports.sourceNodes = async (params, options) => {
  const { youTubeIdRedStringTreasure = [] } = options;
  await Promise.all(
    youTubeIdRedStringTreasure.map((id) => prepYouTubeNode(id, params))
  );
};

exports.createPages = ({ actions: { createPage } }) => {
  if (IS_PROD) return;
  const testTemplate = path.resolve(__dirname, `templates/test.js`);
  createPage({
    path: "local-source-youtube-test",
    component: testTemplate,
  });
};
