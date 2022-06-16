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

// 3.0. npm i gatsby-plugin-utils

// 3.1. 💩🐸On🔌👸 is undefined;
let coreSupportsOnOluginInit = undefined;

// 3.2. try {} catch
try {
  // 3.3. is💜NodeLife🚴‍♀️🐸 from npm i gatsby-plugin-utils
  const { isGatsbyNodeLifecycleSupported } = require(`gatsby-plugin-utils`);

  // 3.4. if 💩🐸On🔌👸 === "🏴‍☠️" or === "un🏴‍☠️"
  if (isGatsbyNodeLifecycleSupported(`onPluginInit`)) {
    console.log(`onPluginInit 😬`);
    coreSupportsOnPluginInit = "stable";
  } else if (isGatsbyNodeLifecycleSupported(`unstable_onPluginInit`)) {
    console.log(` un onPluginInit 😬`);
    coreSupportsOnPluginInit = "unstable";
  }
} catch (error) {
  console.error(`could not check`);
}

// 3.5. const 🔌Options
const pluginOptions = getResourceOptions();
// 3.6. const

// 3.7.  👸🌐🌀
const initializeGlobalState = (options) => {
  const cloudinary = newCloudinary(options);
  const resourceOptions = pluginOptions(options);
};

// 3.8 if (💩🐸On🔌👸 === 'stable') {} else if (💩🐸On🔌👸 === 'unstable') {} else {}

if (coreSupportsOnPluginInit === "stable") {
  console.log(`expo onPluginInit 😬`);
  exports.onPluginInit = initializeGlobalState;
} else if (coreSupportsOnPluginInit === "stable") {
  console.log(`expo unst onPluginInit 😬`);
  exports.unstable_onPluginInit = initializeGlobalState;
} else {
  console.log(`onPlreInit 😬`);
  exports.onPreInit = initializeGlobalState;
}

let emojisRepresent = {
  // swap out some of the emojis with code
  "on🔌👸": onPluginInit,
  "💩🐸On🔌👸": coreSupportsOnPluginInit,
  "is💜NodeLife🚴‍♀️🐸": isGatsbyNodeLifecycleSupported,
  "un🏴‍☠️": "unstable",
  "🏴‍☠️": "stable",
  "👸🌐🌀": initializeGlobalState,
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
  // const cloudinary = newCloudinary(options);
  // const resourceOptions = getResourceOptions(options);

  return createCloudinaryNodes(gatsby, cloudinary, resourceOptions, {
    limit: 27,
  });
};
