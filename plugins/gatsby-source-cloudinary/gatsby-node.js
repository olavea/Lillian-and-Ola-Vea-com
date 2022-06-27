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

// 🤯. 🔌 ☑️s🎶  = ({ 😹 }) => {
exports.pluginOptionsSchema = ({ Joi }) => {
  // return 😹.📖({
  return Joi.object({
    //api🔑:  😹.🧶().®️().💁(`Enables api🔑`),
    cloudName: Joi.string(),
    apiKey: Joi.string(),
    apiSecret: Joi.string(),
    uploadFolder: Joi.string(),
    uploadSourceInstanceNames: Joi.array().items(Joi.string()),
    fluidMaxWidth: Joi.number().integer().positive().default(1000),
    fluidMinWidth: Joi.number().integer().positive().default(200),
    createDerived: Joi.boolean().default(true),
    breakpointsMaxImages: Joi.number().integer().positive().default(5),
    useCloudinaryBreakpoints: Joi.boolean().default(false),
    overwriteExisting: Joi.boolean().default(false),
    enableDefaultTransformations: Joi.boolean().default(false),
    alwaysUseDefaultBase64: Joi.boolean().default(false),
  });
};
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

// Cap'n Ola is creating new type

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type TobbieCloudinaryMedia implements Node {
      joinedAt: Date
    }
  `);
  console.log("Cap Ola is creating a new type");
};

exports.sourceNodes = (gatsby, options) => {
  const cloudinary = newCloudinary(options);
  const resourceOptions = getResourceOptions(options);

  return createCloudinaryNodes(gatsby, cloudinary, resourceOptions, {
    limit: 27,
  });
};

// Here is step 3. Global State of our Gatsby v4 plugin upgrade code with emojis
// yarn add gatsby-plugin-utils inside packages/gatsby-transformer-cloudinary
// gatsby-plugin-utils will help you keep backwards compatibility with Gatsby 3 while moving forward to a Gatsby 4 world

// let
let coreSupportsOnPluginInit = undefined;

// 1. try {coreSupportsOnPluginInit = "🏴‍☠️👸" or "un🏴‍☠️👸"} catch
try {
  // 2.
  const { isGatsbyNodeLifecycleSupported } = require(`gatsby-plugin-utils`);

  // 3. else if
  if (isGatsbyNodeLifecycleSupported(`onPlugInit`)) {
    coreSupportsOnPluginInit = "stable";
    console.log(`💩🐸On🔌👸 = 🏴‍☠️👸`);
  } else if (isGatsbyNodeLifecycleSupported(`unstable_onPluginInit`)) {
    coreSupportsOnPluginInit = "unstable";
    console.log(`💩🐸On🔌👸 = un🏴‍☠️👸`);
  }
} catch (error) {
  console.error(`Cannot check if Gatsby supports on🔌👸 🚴‍♀️`);
}

// let
//const {} = newCloudinary(options);

// 4. const
const initializaGlobalState = (options) => {
  const cloudinary = newCloudinary(options);
  const resourceOptions = getResourceOptions(options);
  return cloudinary && resourceOptions;
};

// 5. else if
if (coreSupportsOnPluginInit === "stable") {
  exports.onPluginInit = initializaGlobalState;
} else if (coreSupportsOnPluginInit === "unstable") {
  exports.unstable_onPluginInit = initializaGlobalState;
} else {
  console.log(`💩🐸On🔌👸 = not on`);
  exports.onPreBootstrap = initializaGlobalState;
}
