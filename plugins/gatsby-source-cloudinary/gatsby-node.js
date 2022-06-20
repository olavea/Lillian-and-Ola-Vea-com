const { newCloudinary, getResourceOptions } = require("./utils");

// Cap Ola is changing from old type to new type
const type = `TobbieCloudinaryMedia`;
// What is different from old type?
// Looks like there is not much difference,
//because it is mostly internal type maybe?

// Cap'n Ola is deleting old type
// But should I keep t?
// How do I test if there is a diference?
// How do I test if the `result.type` is working? Do I need to add images to cloudinary in a different way
// Now I only get results for the `const DEFAULT_TYPE = "upload";`
//const type = `CloudinaryMedia`;

// 🤯. 🔌 ☑️ 🎶  = ({ 😹 }) => {
exports.pluginOptionsSchema = ({ Joi }) => {
  // return 😹.📖({})
  return Joi.object({
    //  😹.🧶().®️().💁(`Enables`),
    cloudName: Joi.string().required().description(`Enobels `),
    apiSecret: Joi.string().required().description(`Enobles `),
    apiSecret: Joi.string().required().description(`Enobles `),
    uploadFolder: Joi.string().required().description(`Enobles `),
    allowedMediaTypes: Joi.string().required().description(`Enobles`),
  });
};

// 3.0. npm i gatsby-plugin-utils

// 3.1. 💩🐸On🔌👸 is undefined;
let coreSupportsOnOluginInit = undefined;

// 3.2. try {} catch
try {
  // 3.3. is💜NodeLife🚴‍♀️🐸 from npm i gatsby-plugin-utils
  const { isGatsbyNodeLifecycleSupported } = require(`gatsby-plugin-utils`);

  // 3.4. if 💩🐸On🔌👸 === "🏴‍☠️" or === "un🏴‍☠️"
  if (isGatsbyNodeLifecycleSupported(`onPluginInit`)) {
    coreSupportsOnOluginInit = "stable";
  } else if (isGatsbyNodeLifecycleSupported(`unstable_onPluginInit`)) {
    coreSupportsOnOluginInit = "unstable";
  }
} catch (error) {
  console.error(`Could not ceck if Gatsby supports onPluginInit lifecycle 🚴‍♀️`);
}

// 3.5. const 🔌Options
let globalPluginOptions = {};

// 3.6.  👸🌐🌀
const initializaGlobalState = ({ newCloudinary, getResourceOptions }) => {
  globalPluginOptions = newCloudinary && getResourceOptions;
};

// 3.7 if (💩🐸On🔌👸 === 'stable') {} else if (💩🐸On🔌👸 === 'unstable') {} else {}
if (coreSupportsOnOluginInit === "stable") {
  exports.onPluginInit = initializaGlobalState;
} else if (coreSupportsOnOluginInit === "unstable") {
  exports.unstable_onPluginInit = initializaGlobalState;
} else {
  exports.onPreBootstrap = initializaGlobalState;
}

const getNodeData = (gatsby, media) => {
  return {
    ...media,
    id: gatsby.createNodeId(`cloudinary-media-${media.public_id}`),
    parent: null,
    internal: {
      type,
      content: JSON.stringify(media),
      contentDigest: gatsby.createContentDigest(media),
    },
  };
};

const addTransformations = (resource, transformation, secure) => {
  const splitURL = secure
    ? resource.secure_url.split("/")
    : resource.url.split("/");
  splitURL.splice(6, 0, transformation);

  const transformedURL = splitURL.join("/");
  return transformedURL;
};

// added async
const createCloudinaryNodes = async (
  gatsby,
  cloudinary,
  options,
  { limit }
) => {
  const { reporter } = gatsby;
  let nextCursor = null;

  do {
    // added await
    const result = await cloudinary.api.resources({
      resource_type: "image",
      max_results: limit < 10 ? limit : 10,
      next_cursor: nextCursor,
    });
    reporter.info(
      `fetched 🌩️ Assets >>> ${result.resources.length} from ${nextCursor}`
    );

    result.resources.forEach((resource) => {
      const transformations = "q_auto,f_auto"; // Default CL transformations, todo: fetch base transformations from config maybe.

      resource.url = addTransformations(resource, transformations);
      resource.secure_url = addTransformations(resource, transformations, true);

      const nodeData = getNodeData(gatsby, resource);
      gatsby.actions.createNode(nodeData);
    });

    nextCursor = result.next_cursor;
    limit = limit - 10;
  } while (nextCursor && limit > 0);
};

// Cap'n Ola Vea is creating new type

// 1.1 🤯.create🎶Customization = ({ actions }) => {
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // 1.2 create🐙
  // 1.3 🐙 TobbieCloudinaryMedia
  createTypes(`
    type TobbieCloudinaryMedia implements Node {
      joinedAt: Date
    }
  `);
  // 1.4 console.log("Cap Ola is creating a new type 🐙 ");
};

exports.sourceNodes = (gatsby, options) => {
  // const cloudinary = newCloudinary(options);
  // const resourceOptions = getResourceOptions(options);

  return createCloudinaryNodes(gatsby, cloudinary, resourceOptions, {
    limit: 27,
  });
};
