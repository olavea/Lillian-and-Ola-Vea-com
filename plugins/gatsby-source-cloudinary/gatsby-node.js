const { newCloudinary, getResourceOptions } = require("./utils");

// Cap'n Ola is changing from old type to new type
const type = `TobbieCloudinaryMedia`;

// Cap'n Ola is deleting old type
// const type = `CloudinaryMedia`;

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

let coreSupportsOnPluginInit = "unstable" | "stable" | undefined;

try {
  const { isGatsbyNodeLifecycleSupported } = require(`gatsby-plugin-utils`);
  if (isGatsbyNodeLifecycleSupported(`onPluginInit`)) {
    coreSupportsOnPluginInit = "stable";
  } else if (isGatsbyNodeLifecycleSupported(`unstable_onPluginInit`)) {
    coreSupportsOnPluginInit = "unstable";
  }
} catch (error) {
  console.error(
    `Could not check if Gatsby supports onPluginInit lifecycle 🚴‍♀️  `
  );
}

let globalPluginOptions = {};
const initializeGlobalState = (_, pluginOptions) => {
  globalPluginOptions = pluginOptions;
};

if (coreSupportsOnPluginInit === "stable") {
  exports.onPluginInit = initializeGlobalState;
} else if (coreSupportsOnPluginInit === "unstable") {
  exports.unstable_onPluginInit = initializeGlobalState;
} else {
  exports.onPreBootstrap = initializeGlobalState;
}
