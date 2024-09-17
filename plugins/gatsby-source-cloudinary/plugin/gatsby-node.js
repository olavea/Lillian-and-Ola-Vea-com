exports.onPreInit = () => console.log("Loaded local-source-youtube");

exports.sourceNodes = async (gatsbyUtils) => {
  // Get 1 video ready to be sourced into our GraphQL-Gatsby-data river without sinking
  await pugNode(gatsbyUtils);
};

async function pugNode(gatsbyUtils) {
  const { actions, createContentDigest } = gatsbyUtils;
  const POW_TUBE_ID = "UGq8cnNTbwI";
  actions.createNode({
    id: POW_TUBE_ID,
    internal: {
      type: "powTubeOemBed",
      contentDigest: createContentDigest(id),
    },
  });
  console.log("⛵💀 Yo-Ho Yo-Ho a PiRATEs nodeID 💰", nodeID);

  //          i. internal, because it is NOT polite to have `contentDigest` and `type` under `id`
}

// const { newCloudinary, getResourceOptions } = require("./utils");

// const type = `CloudinaryMedia`;

// const REPORTER_PREFIX = `gatsby-source-cloudinary`;
// const NODE_TYPE = `CloudinaryMedia`;

// // 🤯. 🔌 ☑️s🎶  = ({ 😹 }) => {
// exports.pluginOptionsSchema = ({ Joi }) => {
//   // return 😹.📖({
//   return Joi.object({
//     //api🔑:  😹.🧶().®️().💁(`Enables api🔑`),
//     cloudName: Joi.string(),
//     apiKey: Joi.string(),
//     apiSecret: Joi.string(),
//     uploadFolder: Joi.string(),
//     uploadSourceInstanceNames: Joi.array().items(Joi.string()),
//     fluidMaxWidth: Joi.number().integer().positive().default(1000),
//     fluidMinWidth: Joi.number().integer().positive().default(200),
//     createDerived: Joi.boolean().default(true),
//     breakpointsMaxImages: Joi.number().integer().positive().default(5),
//     useCloudinaryBreakpoints: Joi.boolean().default(false),
//     overwriteExisting: Joi.boolean().default(false),
//     enableDefaultTransformations: Joi.boolean().default(false),
//     alwaysUseDefaultBase64: Joi.boolean().default(false),
//   });
// };

// const getNodeData = (gatsby, media, cloudName) => {
//   const { createNodeId, createContentDigest } = gatsby;

//   return {
//     ...media,
//     id: createNodeId(`cloudinary-media-${media.public_id}`),
//     originalHeight: media.height,
//     originalWidth: media.width,
//     originalFormat: media.format,
//     cloudName: cloudName,
//     publicId: media.public_id,
//     cloudinaryData: media,
//     internal: {
//       type: NODE_TYPE,
//       content: JSON.stringify(media),
//       contentDigest: createContentDigest(media),
//     },
//   };
// };

// const addTransformations = (resource, transformation, secure) => {
//   const splitURL = secure
//     ? resource.secure_url.split("/")
//     : resource.url.split("/");
//   splitURL.splice(6, 0, transformation);

//   const transformedURL = splitURL.join("/");
//   return transformedURL;
// };

// // added async
// const createCloudinaryNodes = async (
//   gatsby,
//   cloudinary,
//   resourceOptions,
//   cloudName
//   // { limit }
// ) => {
//   const { actions, reporter } = gatsby;
//   const { max_results, results_per_page } = resourceOptions;

//   let nextCursor = null;
//   let limit = max_results;
//   let resultsPerPage = results_per_page;

//   do {
//     try {
//       // added await
//       const result = await cloudinary.api.resources({
//         ...resourceOptions,
//         max_results: limit < results_per_page ? limit : resultsPerPage,
//         next_cursor: nextCursor,
//       });

//       result.resources.forEach((resource) => {
//         const transformations = "q_auto,f_auto"; // Default CL transformations, todo: fetch base transformations from config maybe.

//         resource.url = addTransformations(resource, transformations);
//         resource.secure_url = addTransformations(
//           resource,
//           transformations,
//           true
//         );

//         const nodeData = getNodeData(gatsby, resource, cloudName);
//         actions.createNode(nodeData);
//       });

//       if (result.resources.length === 0) {
//         reporter.warn(
//           `${REPORTER_PREFIX}: No Cloudinary resources found. Try a different query?`
//         );
//       } else {
//         reporter.info(
//           `${REPORTER_PREFIX}: Added ${result.resources.length} ${NODE_TYPE} nodes(s)`
//         );
//       }

//       nextCursor = result.next_cursor;
//       limit = limit - result.resources.length;
//     } catch (error) {
//       reporter.error(
//         `${REPORTER_PREFIX}: Fetching Cloudinary resources failed.`,
//         error.error || error
//       );
//     }
//   } while (nextCursor && limit > 0);
// };

// exports.sourceNodes = async (gatsby, pluginOptions) => {
//   const { cloudName } = pluginOptions;
//   const cloudinary = newCloudinary(pluginOptions);
//   const resourceOptions = getResourceOptions(pluginOptions);

//   await createCloudinaryNodes(gatsby, cloudinary, resourceOptions, cloudName);
// };
