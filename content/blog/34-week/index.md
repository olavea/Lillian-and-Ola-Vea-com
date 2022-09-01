
```js
 // https://github.com/cloudinary-devs/gatsby-source-cloudinary / gatsby-node.js
const { newCloudinary, getResourceOptions } = require("./utils");

// Variables
const REPORTER_PREFIX = `gatsby-source-cloudinary`;
const NODE_TYPE = `CloudinaryMedia`;

// function returning an object
// 1.1 🤯. 🔌 ☑️ s🎶  = ({ 🥳 }) => {
exports.pluginOptionsSchema = ({ Joi }) => {
  // 1.2 return 🥳.📖({
  return Joi.object({
    // 1.3  🥳.🧶().®️().default(1000),
    cloudName: Joi.string().required(),
    apiKey: Joi.string().required(),
    apiSecret: Joi.string().required(),
    resourceType: Joi.string().default("image"),
    type: Joi.string().default("all"),
    maxResults: Joi.number().integer().positive().default(10),
    tags: Joi.boolean().default(false),
    prefix: Joi.string(),
    context: Joi.boolean(),
  });
};
// function
const getNodeData = (gatsbyUtils, media, cloudName) => {
  const { createNodeId, createContentDigest } = gatsbyUtils;
// object, with an internal object inside it
  return {
    ...media,
    id: createNodeId(`cloudinary-media-${media.public_id}`),
    originalHeight: media.height,
    originalWidth: media.width,
    originalFormat: media.format,
    cloudName: cloudName,
    publicId: media.public_id,
    cloudinaryData: media,
    internal: {
      type: NODE_TYPE,
      content: JSON.stringify(media),
      contentDigest: createContentDigest(media),
    },
  };
};
// function
const addTransformations = (resource, transformation, secure) => {
  const splitURL = secure
    ? resource.secure_url.split("/")
    : resource.url.split("/");
  splitURL.splice(6, 0, transformation);

  const transformedURL = splitURL.join("/");
  return transformedURL;
};
// function
const createCloudinaryNodes = async (
  gatsbyUtils,
  cloudinary,
  resourceOptions,
  cloudName
) => {
  const { actions, reporter } = gatsbyUtils;
  const { max_results, results_per_page } = resourceOptions;

  let nextCursor = null;
  let limit = max_results;
  let resultsPerPage = results_per_page;

  do {
    try {
      const result = await cloudinary.api.resources({
        ...resourceOptions,
        max_results: limit < resultsPerPage ? limit : resultsPerPage,
        next_cursor: nextCursor,
      });

      result.resources.forEach((resource) => {
        const transformations = "q_auto,f_auto"; // Default CL transformations, todo: fetch base transformations from config maybe.

        resource.url = addTransformations(resource, transformations);
        resource.secure_url = addTransformations(
          resource,
          transformations,
          true
        );

        const nodeData = getNodeData(gatsbyUtils, resource, cloudName);
        actions.createNode(nodeData);
      });
// else if
      if (result.resources.length === 0) {
        reporter.warn(
          `${REPORTER_PREFIX}: No Cloudinary resources found. Try a different query?`
        );
      } else {
        reporter.info(
          `${REPORTER_PREFIX}: Added ${result.resources.length} ${NODE_TYPE} nodes(s)`
        );
      }

      nextCursor = result.next_cursor;
      limit = limit - result.resources.length;
    } catch (error) {
      reporter.error(
        `${REPORTER_PREFIX}: Fetching Cloudinary resources failed.`,
        error.error || error
      );
    }
  } while (nextCursor && limit > 0);
};

exports.sourceNodes = async (gatsbyUtils, pluginOptions) => {
  const { cloudName } = pluginOptions;
  const cloudinary = newCloudinary(pluginOptions);
  const resourceOptions = getResourceOptions(pluginOptions);
// function call await
  await createCloudinaryNodes(
    gatsbyUtils,
    cloudinary,
    resourceOptions,
    cloudName
  );
};


// Source avatars as part of build #12

 const result = await supabase.from("public_profiles").select().limit(10);

 // gatsby-node.js

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// function
const createCloudinaryNodes = async (gatsbyUtils) => {
  const { actions, reporter, createNodeId, createContentDigest } = gatsbyUtils;
  const { createNode } = actions;

  const result = await cloudinary.api.resources({
    resource_type: "image",
  });

  result.resources.forEach((resource) => {
    reporter.info(`Create CloudinaryAsset >>> ${resource.public_id}`);
    createNode({
      id: createNodeId(resource.public_id),
      ...resource,
      internal: {
        type: "CloudinaryAsset",
        content: JSON.stringify(resource),
        contentDigest: createContentDigest(resource),
      },
    });
  });
};

exports.sourceNodes = async (gatsbyUtils) => {
  const { reporter } = gatsbyUtils;

  reporter.info("sourceNodes - START");
  await createCloudinaryNodes(gatsbyUtils);
  reporter.info("sourceNodes - DONE");
};

// CONSOLE OUTPUT
// info sourceNodes - START
// info sourceNodes - DONE
// info Create CloudinaryAsset >>> queen.raae.codes-test-5/static/raae-avatar
// info Create CloudinaryAsset >>> queen.raae.codes-test-5/static/raae
// ... more nodes


```





```js

// SKRIV EN piratyInsult function

  // SKRIV EN kroppsDeler variable MED ET array MED TRE "Kroppsdeler" ORD PÅ ENGELSK INNI

  // SKRIV EN banneordene variable MED ET array MED TRE "Kroppsdeler" ORD PÅ ENGELSK INNI

  // SKRIV EN dyrene variable MED ET array MED TRE "Kroppsdeler" ORD PÅ ENGELSK INNI

  // SKRIV EN dyreKroppsdeler variable MED ET array MED TRE "dyreKroppsdeler" ORD PÅ ENGELSK INNI

  // SKRIV EN kroppsdel function MED param[Math.floor(Math.random() * 3)]; INNI

  // SKRIV EN banneord function MED param[Math.floor(Math.random() * 3)]; INNI

  // SKRIV EN dyr function MED param[Math.floor(Math.random() * 3)]; INNI

  // SKRIV EN dyreDel function MED param[Math.floor(Math.random() * 3)]; INNI

  // SKRIV EN utskjelling variable SOM calls HVER AV functions OG pass in RETT variable SOM ET argument
  // SKRIV EN utskjelling variable

    "Your " +
    // call kroppsdel function OG pass in kroppsDeler
     +
    " is more " +
    // call banneord function OG pass in banneordene
     +
    " than a " +
    // call dyr function OG pass in dyrene
     +
    "s " +
    // call dyreDel function OG pass in dyreKroppsdeler
     +
    "!!!";
  // return utskjelling

}

// call piratyInsult();


// KLIPP UT OG LIM INN I console I NETTLESERN




// SKRIV EN piratyInsult function
function piratyInsult() {
  // SKRIV EN kroppsDeler variable MED ET array MED TRE "Kroppsdeler" ORD PÅ ENGELSK INNI
    var kroppsDeler = ["Face", "Mum", "Hair"];
  // SKRIV EN banneordene variable MED ET array MED TRE "Kroppsdeler" ORD PÅ ENGELSK INNI
    var banneordene = ["Landlubbery", "Stinking", "Stupid"];
  // SKRIV EN dyrene variable MED ET array MED TRE "Kroppsdeler" ORD PÅ ENGELSK INNI
    var dyrene = ["Landlubber", "Dog", "Gull"];
  // SKRIV EN dyreKroppsdeler variable MED ET array MED TRE "dyreKroppsdeler" ORD PÅ ENGELSK INNI
    var dyreKroppsdeler = ["Poop", "Butt Hole", "Feet"];
  // SKRIV EN kroppsdel function MED param[Math.floor(Math.random() * 3)]; INNI
    const kroppsdel = param => param[Math.floor(Math.random() * 3)];
  // SKRIV EN banneord function MED param[Math.floor(Math.random() * 3)]; INNI
    const banneord = param => param[Math.floor(Math.random() * 3)];
  // SKRIV EN dyr function MED param[Math.floor(Math.random() * 3)]; INNI
    const dyr = param => param[Math.floor(Math.random() * 3)];
  // SKRIV EN dyreDel function MED param[Math.floor(Math.random() * 3)]; INNI
    const dyreDel = param => param[Math.floor(Math.random() * 3)];
  // SKRIV EN utskjelling variable SOM calls HVER AV FUNKSJONENE OG pass in RETT variable SOM ET argument
    var utskjelling =
    "Your " +
     kroppsdel(kroppsDeler) +
    " is more " +
    banneord(banneordene) +
    " than a " +
    dyr(dyrene) +
    "s " +
    dyreDel(dyreKroppsdeler) +
    "!!!";
  // return utskjelling
  return utskjelling;
}

// call piratyInsult();
piratyInsult();

// KLIPP UT OG LIM INN I console I NETTLESERN






  // Skriv en piratyInsult function
function piratyInsult() {
  // Skriv en kroppsDeler variable
    var kroppsDeler = ["Face", "Mum", "Hair"];
  // Skriv en banneordene variable
    var banneordene = ["Landlubbery", "Stinking", "Stupid"];
  // Skriv en dyrene variable
    var dyrene = ["Landlubber", "Dog", "Gull"];
  // Skriv en dyreKroppsdeler variable
    var dyreKroppsdeler = ["Poop", "Butt Hole", "Feet"];
  // Skriv en kroppsdel function
    const kroppsdel = param => param[Math.floor(Math.random() * 3)];
  // Skriv en banneord function
    const banneord = param => param[Math.floor(Math.random() * 3)];
  // Skriv en dyr function
    const dyr = param => param[Math.floor(Math.random() * 3)];
  // Skriv en dyreDel function
    const dyreDel = param => param[Math.floor(Math.random() * 3)];
  // Skriv en utskjelling variable
    var utskjelling =
    "Your " +
     kroppsdel(kroppsDeler) +
    " is more " +
    banneord(banneordene) +
    " than a " +
    dyr(dyrene) +
    "s " +
    dyreDel(dyreKroppsdeler) +
    "!!!";
  return utskjelling;
}
piratyInsult();




```