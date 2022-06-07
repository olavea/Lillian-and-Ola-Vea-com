const axios = require("axios");
const {
  polyfillImageServiceDevRoutes,
  addRemoteFilePolyfillInterface,
} = require("gatsby-plugin-utils/polyfill-remote-file");

const IS_PROD = process.env.NODE_ENV === "production";
const REFRESH_INTERVAL = IS_PROD ? 0 : 60000 * 5; // 60000 ms === 1 min
const YOUTUBE_TYPE = "YouTube";
const YOUTUBE_THUMBNAIL_TYPE = "YouTubeThumbnail";

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    youTubeIds: Joi.array().items(Joi.string()).required(),
    refreshInterval: Joi.number().min(0).default(REFRESH_INTERVAL),
  });
};

exports.onCreateDevServer = ({ app }) => {
  polyfillImageServiceDevRoutes(app);
};

exports.createSchemaCustomization = (gatsbyUtils) => {
  createYouTubeTypes(gatsbyUtils);
};
// G. Get data later, create node now
exports.sourceNodes = async (gatsbyUtils, pluginOptions) => {
  await createYouTubeNodes(gatsbyUtils, pluginOptions);
};

exports.onCreateNode = (gatsbyUtils) => {
  const { node } = gatsbyUtils;

  if (node.internal.type === YOUTUBE_TYPE) {
    createYouTubeThumbnailNode(gatsbyUtils);
  }
};

const createYouTubeNodes = async (gatsbyUtils, pluginOptions) => {
  const { youTubeIds } = pluginOptions;
  await Promise.all(
    youTubeIds.map((id) => createYouTubeNode(gatsbyUtils, pluginOptions, id))
  );
};

const createYouTubeNode = async (gatsbyUtils, pluginOptions, youTubeId) => {
  const {
    actions: { createNode, touchNode },
    createNodeId,
    createContentDigest,
    reporter,
    cache,
    getNode,
  } = gatsbyUtils;
  const { refreshInterval = REFRESH_INTERVAL } = pluginOptions;

  const youTubeNodeId = createNodeId(`${YOUTUBE_TYPE} >>> ${youTubeId}`);
  const timestamp = await cache.get(youTubeNodeId);
  const existingNode = getNode(youTubeNodeId);
  const existingNodeAge = Date.now() - timestamp;

  if (existingNode && existingNodeAge <= refreshInterval) {
    // Node already exists, make sure it stays around
    touchNode(existingNode);
    reporter.info(`Touch YouTube Node for ${youTubeId}`);
  } else {
    // Fetch oEmbed data and create node
    const embedData = await fetchEmbed(youTubeId);

    createNode({
      id: youTubeNodeId,
      youTubeId: youTubeId,
      oEmbed: embedData,
      internal: {
        type: YOUTUBE_TYPE,
        contentDigest: createContentDigest(embedData),
      },
    });

    await cache.set(youTubeNodeId, `${Date.now()}`);
    reporter.info(`Create YouTube Node for ${youTubeId}`);
  }
};
// G. Get data out of axios-river
const fetchEmbed = async (id) => {
  // // E. Earl and url
  const youTubeUrl = `https://youtu.be/${id}`;
  const { data } = await axios.get("https://www.youtube.com/oembed", {
    params: {
      url: youTubeUrl,
    },
  });
  return { ...data, url: youTubeUrl };
};

const createYouTubeThumbnailNode = (gatsbyUtils) => {
  const { node, actions, reporter, createNodeId } = gatsbyUtils;
  const { createNode } = actions;

  const youTubeThumbnailNodeId = createNodeId(
    `${YOUTUBE_THUMBNAIL_TYPE} >>> ${node.youTubeId}`
  );

  createNode({
    id: youTubeThumbnailNodeId,
    parent: node.id,
    youTubeId: node.youTubeId,
    url: node.oEmbed.thumbnail_url,
    mimeType: "image/jpeg",
    filename: node.youTubeId + ".jpg",
    height: node.oEmbed.thumbnail_height,
    width: node.oEmbed.thumbnail_width,
    internal: {
      type: YOUTUBE_THUMBNAIL_TYPE,
      contentDigest: node.internal.contentDigest,
    },
  });

  reporter.info(`Create YouTubeThumbnail Node for ${node.youTubeId}`);
};

const createYouTubeTypes = (gatsbyUtils) => {
  const { actions, schema } = gatsbyUtils;

  actions.createTypes([
    `
    type YouTube implements Node {
      thumbnail: YouTubeThumbnail @link(from: "youTubeId" by: "youTubeId")
    }
  `,
    addRemoteFilePolyfillInterface(
      schema.buildObjectType({
        name: `YouTubeThumbnail`,
        fields: {
          youTubeId: "String!",
        },
        interfaces: [`Node`, `RemoteFile`],
      }),
      {
        schema,
        actions,
      }
    ),
  ]);
};

// Here is step 3. Global State of our Gatsby v4 plugin upgrade code with emojis
// yarn add gatsby-plugin-utils inside packages/gatsby-transformer-cloudinary
// gatsby-plugin-utils will help you keep backwards compatibility with Gatsby 3 while moving forward to a Gatsby 4 world

// let

// 1. try {coreSupportsOnPluginInit = "🏴‍☠️👸" or "un🏴‍☠️👸"} catch

// 2. require(`gatsby-plugin-utils`);

// 3. else if

// let

// 4. const

// 5. else if

let coreSupportsOnPluginInit = undefined;

try {
  const { isGatsbyNodeLifecycleSupported } = require(`gatsby-plugin-utils`);
  if (isGatsbyNodeLifecycleSupported(`onPluginInit`)) {
    coreSupportsOnPluginInit = "stable";
  } else if (isGatsbyNodeLifecycleSupported(`unstable_onPluginInit`)) {
    coreSupportsOnPluginInit = "unstable";
  }
} catch (error) {
  console.error(`Could not check 🚴‍♀️`);
}

let globalPluginOptions = {};

const initializaGlobalState = (_, pluginOptions, reporter) => {
  globalPluginOptions = pluginOptions;
};

if (coreSupportsOnPluginInit === "stable") {
  exports.onPluginInit = initializaGlobalState;
} else if (coreSupportsOnPluginInit === "unstable") {
  exports.unstable_onPluginInit = initializaGlobalState;
} else {
  exports.onPreBootstrap = initializaGlobalState;
}
