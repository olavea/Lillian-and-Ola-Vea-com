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
const createCloudinaryNodes = async (gatsby, cloudinary, options) => {
  // added await
  await cloudinary.api.resources(options, (error, result) => {
    const hasResources = result && result.resources && result.resources.length;
    console.log("This is the result", result);
    console.log("This is the type", result.type);
    if (error) {
      console.error(error);
      return;
    }

    if (!hasResources) {
      console.warn(
        "\n ~Yikes! No nodes created because no Cloudinary resources found. Try a different query?"
      );
      return;
    }

    result.resources.forEach((resource) => {
      const transformations = "q_auto,f_auto"; // Default CL transformations, todo: fetch base transformations from config maybe.

      resource.url = addTransformations(resource, transformations);
      resource.secure_url = addTransformations(resource, transformations, true);

      const nodeData = getNodeData(gatsby, resource);
      gatsby.actions.createNode(nodeData);
    });

    console.info(
      `Added ${hasResources} CloudinaryMedia ${
        hasResources > 1 ? "nodes" : "node"
      }`
    );
  });
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

  return createCloudinaryNodes(gatsby, cloudinary, resourceOptions);
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
  console.error(`cannot 🚴‍♀️`);
}

let globalPluginOptions = {};

const initializeGlobalState = (_, luginOptions) => {
  globalPluginOptions = luginOptions;
};

if (coreSupportsOnPluginInit === "stable") {
  exports.onPluginInit = initializeGlobalState;
} else if (coreSupportsOnPluginInit === "unstable") {
  exports.unstable_onPluginInit = initializeGlobalState;
} else {
  exports.onPreBootstrap = initializeGlobalState;
}
