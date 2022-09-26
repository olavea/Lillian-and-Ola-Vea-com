


```js
// demo/src/pages/index.js
import * as React from "react";
import { graphql } from "gatsby";

export default function IndexPage({ data }) {
  return (
    <main>
      {data.allCloudinaryMedia.nodes.map(({ media }) => {
          <img
            style={{ margin: "1em" }}
            width="300"
            src={ secure_url }
            alt={"no alt"}
        />
      })}
    </main>
  );
}

export const query = graphql`
  query {
    allCloudinaryMedia {
      nodes {
        secure_url
      }
    }
  }
`;
```

```js
// demo/src/pages/index.js
import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function IndexPage({ data }) {
  console.log(data);
  return (
    <main>
      {data.allCloudinaryMedia.nodes.map(({ media }) => {
        const { secure_url } = media;
        // const galaxyImage = getImage(media.galaxyImageData);
        // const oceanImage = getImage(media.oceanImageData);
        // <GatsbyImage image={galaxyImage} />
        //     <GatsbyImage image={oceanImage} />
        return (
          <div style={{ margin: "1em" }}>
            <img width="300" src={secure_url} alt={"no alt"} />
          </div>
        );
      })}
    </main>
  );
}

export const query = graphql`
  query {
    allCloudinaryMedia {
      nodes {
        galaxyImageData: gatsbyImageData(
          width: 300
          transformations: ["c_fill", "e_background_removal"]
          chained: ["u_demo:galaxy,c_fill,w_1.0,h_1.0,fl_relative"]
          backgroundColor: "PaleTurquoise"
        )
        oceanImageData: gatsbyImageData(
          width: 300
          transformations: ["c_fill", "e_background_removal"]
          chained: ["u_demo:ocean,c_fill,w_1.0,h_1.0,fl_relative"]
          backgroundColor: "Lavender"
        )
      }
    }
  }
`;

```

```js
//  packages/gatsby-transformer-cloudinary
const { newCloudinary, getResourceOptions } = require("./utils");

// Cap Ola is changing from old type to new type
const type = `CloudinaryMedia`;
// What is different from old type?
// Looks like there is not much difference,
//because it is mostly internal type maybe?

// Cap'n Ola is deleting old type
// But should I keep t?
// How do I test if there is a diference?
// How do I test if the `result.type` is working? Do I need to add images to cloudinary in a different way
// Now I only get results for the `const DEFAULT_TYPE = "upload";`
//const type = `CloudinaryMedia`;

const REPORTER_PREFIX = `gatsby-source-cloudinary`;
const NODE_TYPE = `CloudinaryMedia`;

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

const getNodeData = (gatsby, media, cloudName) => {
  const { createNodeId, createContentDigest } = gatsby;

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
  resourceOptions,
  cloudName
  // { limit }
) => {
  const { actions, reporter } = gatsby;
  const { max_results, results_per_page } = resourceOptions;

  let nextCursor = null;
  let limit = max_results;
  let resultsPerPage = results_per_page;

  do {
    try {
      // added await
      const result = await cloudinary.api.resources({
        ...resourceOptions,
        max_results: limit < results_per_page ? limit : resultsPerPage,
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

        const nodeData = getNodeData(gatsby, resource, cloudName);
        actions.createNode(nodeData);
      });

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

exports.sourceNodes = async (gatsby, pluginOptions) => {
  const { cloudName } = pluginOptions;
  const cloudinary = newCloudinary(pluginOptions);
  const resourceOptions = getResourceOptions(pluginOptions);

  await createCloudinaryNodes(gatsby, cloudinary, resourceOptions, cloudName);
};

// Here is step 3. Global State of our Gatsby v4 plugin upgrade code with emojis
// yarn add gatsby-plugin-utils inside packages/gatsby-transformer-cloudinary
// gatsby-plugin-utils will help you keep backwards compatibility with Gatsby 3 while moving forward to a Gatsby 4 world

// let
// let coreSupportsOnPluginInit = undefined;

// // 1. try {coreSupportsOnPluginInit = "🏴‍☠️👸" or "un🏴‍☠️👸"} catch
// try {
//   // 2.
//   const { isGatsbyNodeLifecycleSupported } = require(`gatsby-plugin-utils`);

//   // 3. else if
//   if (isGatsbyNodeLifecycleSupported(`onPlugInit`)) {
//     coreSupportsOnPluginInit = "stable";
//     console.log(`💩🐸On🔌👸 = 🏴‍☠️👸`);
//   } else if (isGatsbyNodeLifecycleSupported(`unstable_onPluginInit`)) {
//     coreSupportsOnPluginInit = "unstable";
//     console.log(`💩🐸On🔌👸 = un🏴‍☠️👸`);
//   }
// } catch (error) {
//   console.error(`Cannot check if Gatsby supports on🔌👸 🚴‍♀️`);
// }

// // let
// //const {} = newCloudinary(options);

// // 4. const
// const initializaGlobalState = (options) => {
//   const cloudinary = newCloudinary(options);
//   const resourceOptions = getResourceOptions(options);
//   return cloudinary && resourceOptions;
// };

// // 5. else if
// if (coreSupportsOnPluginInit === "stable") {
//   exports.onPluginInit = initializaGlobalState;
// } else if (coreSupportsOnPluginInit === "unstable") {
//   exports.unstable_onPluginInit = initializaGlobalState;
// } else {
//   console.log(`💩🐸On🔌👸 = not on`);
//   exports.onPreBootstrap = initializaGlobalState;
// }

// Cap'n Ola is creating new type

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;

//   createTypes(`
//     type CloudinaryMedia implements Node {
//       joinedAt: Date
//     }
//   `);
//   console.log("Cap Ola is creating a new type");
// };

```