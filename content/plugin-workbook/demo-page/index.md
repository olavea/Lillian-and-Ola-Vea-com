---
title: Ola is adding a demo page to a local source-plugin #19 #60
---


```js

// .gitignore
// lots


// .prettierignore

.cache
public


// demo/.env.EXAMPLE
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_CLOUD_NAME=

CLOUDINARY_SOURCE_PREFIX=

```



```js
// demo/gatsby-config.js

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Source Plugin Demo`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-image`,
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        context: true,
        maxResults: 10,
        prefix: process.env.CLOUDINARY_SOURCE_PREFIX,
      },
    },
    {
      resolve: `gatsby-transformer-cloudinary`,
      options: {
        transformTypes: ['CloudinaryMedia'],
      },
    },
  ],
};

```



```js
// demo/package.json

{
  "name": "demo",
  "private": true,
  "description": "A simple demo of the gatsby-source-cloudinary plugin",
  "version": "0.1.0",
  "dependencies": {
    "gatsby": "^4.14.1",
    "gatsby-plugin-image": "2.23.1",
    "gatsby-source-cloudinary": "0.2.0",
    "gatsby-transformer-cloudinary": "3.0.0",
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  },
  "keywords": [
    "gatsby"
  ],
  "scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "start": "gatsby develop",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1"
  }
}
```



```js
// demo/src/pages/404.js

import * as React from 'react';
import { graphql, Link } from 'gatsby';

export default function NotFoundPage({ data }) {
  return (
    <main style={{ fontFamily: 'monospace', textAlign: 'center' }}>
      <h1>{data.site.siteMetadata.title}</h1>

      <h2>404: Not Found</h2>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Go home</Link>
    </main>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

```


```js
// demo/src/pages/index.js

import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function IndexPage({ data }) {
  return (
    <main style={{ fontFamily: 'monospace', textAlign: 'center' }}>
      <h1>{data.site.siteMetadata.title}</h1>

      <table>
        <colgroup>
          <col style={{ width: '20%', backgroundColor: 'ghostwhite' }} />
          <col
            span="4"
            style={{
              width: '20%',
              backgroundColor: 'floralwhite',
            }}
          />
        </colgroup>

        <tr>
          <th>gatsby-source-cloudinary</th>
          <th colSpan={5}>
            gatsby-source-cloudinary + gatsby-transformer-cloudinary +
            gatsby-plugin-image
          </th>
        </tr>

        <tr>
          <th>Plain</th>
          <th>Grayscle</th>
          <th>Tint</th>
          <th>Ken Burns</th>
          <th>Plain</th>
        </tr>

        {data.allCloudinaryMedia.nodes.map((media) => {
          const { secure_url } = media;
          const example1Image = getImage(media.example1ImageData);
          const example2Image = getImage(media.example2ImageData);
          const example3Image = getImage(media.example3ImageData);
          const gatsbyImage = getImage(media);

          return (
            <tr>
              <td>
                <img
                  width="300"
                  style={{ maxWidth: '100%', display: 'block' }}
                  src={secure_url}
                  alt="no alt :("
                />
              </td>
              <td>
                <GatsbyImage
                  style={{ maxWidth: '100%' }}
                  image={example1Image}
                  alt="no alt"
                />
              </td>
              <td>
                <GatsbyImage image={example2Image} alt="no alt" />
              </td>
              <td>
                <GatsbyImage image={example3Image} alt="no alt" />
              </td>
              <td>
                <GatsbyImage image={gatsbyImage} alt="no alt" />
              </td>
            </tr>
          );
        })}
      </table>
    </main>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allCloudinaryMedia {
      nodes {
        secure_url
        gatsbyImageData(width: 300, placeholder: BLURRED)
        example1ImageData: gatsbyImageData(
          width: 300
          transformations: ["e_grayscale"]
          placeholder: TRACED_SVG
        )
        example2ImageData: gatsbyImageData(
          width: 300
          transformations: ["e_tint:equalize:80:blue:blueviolet"]
          backgroundColor: "PaleTurquoise"
        )
        example3ImageData: gatsbyImageData(
          width: 300
          transformations: ["e_zoompan"]
          chained: ["e_loop", "f_gif"]
          backgroundColor: "Lavender"
        )
      }
    }
  }
`;

```


```js
// package.json
{
  "private": true,
  "workspaces": [
    "plugin",
    "demo"
  ],
  "scripts": {
    "develop": "yarn workspace demo develop",
    "build": "yarn workspace demo build",
    "serve": "yarn workspace demo serve",
    "clean": "yarn workspace demo clean",
    "format": "prettier --write \".\""
  },
  "devDependencies": {
    "prettier": "^2.6.2"
  }
}

```


```js
// plugin/gatsby-node.js


```


```js
// plugin/package.json
{
    "name": "gatsby-source-cloudinary",
    "version": "0.2.0",
    "description": "Gatsby source plugin to fetch files from Cloudinary into Gatsby.",
    "main": "gatsby-node.js",
    "repository": "https://github.com/cloudinary-devs/gatsby-source-cloudinary",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [
      "gatsby",
      "gatsby-plugin",
      "cloudinary",
      "gatsby-source-cloudinary"
    ],
    "license": "MIT",
    "dependencies": {
      "cloudinary": "^1.30.0",
      "lodash": "^4.17.21"
    }
  }
```

chore: add semantic release #43
![semantic-release](https://github.com/cloudinary-devs/gatsby-source-cloudinary/pull/43/files)

```js
// raae:chore/38/semantic-release
// ![https://github.com/cloudinary-devs/gatsby-source-cloudinary/pull/43/files](https://github.com/cloudinary-devs/gatsby-source-cloudinary/pull/43/files)

//.github/workflows/release.yml

name: CI
on: push
jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          fetch-depth: 0
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 'lts/*'
      - name: Install dependencies
        run: yarn install
      - name: Test
        run: yarn test
      - name: Release
        env:
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
        run: yarn semantic-release

```


```js
// .releaserc
{
  "branches": [
    "main",
    "next",
    "next-major",
    {
      "name": "beta",
      "prerelease": true
    },
    {
      "name": "alpha",
      "prerelease": true
    }
  ],
  "plugins": [
    [
      "@semantic-release/commit-analyzer",
      {
        "preset": "angular",
        "releaseRules": [
          {
            "type": "docs",
            "scope": "README",
            "release": "patch"
          }
        ],
        "parserOpts": {
          "noteKeywords": [
            "BREAKING CHANGE",
            "BREAKING CHANGES"
          ]
        }
      }
    ],
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md"
      }
    ],
    [
      "@semantic-release/npm",
      {
        "pkgRoot": "plugin"
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": [
          "plugin/package.json",
          "CHANGELOG.md"
        ]
      }
    ],
    "@semantic-release/github"
  ]
}
```

```js
// package.json
{
  "private": true,
  "workspaces": [
    "plugin",
    "demo"
  ],
  "scripts": {
    "test": "jest",
    "watch": "jest --watch",
    "develop": "yarn workspace demo develop",
    "build": "yarn workspace demo build",
    "serve": "yarn workspace demo serve",
    "clean": "yarn workspace demo clean",
    "format": "prettier --write \".\"",
    "semantic-release": "semantic-release"
  },
  "devDependencies": {
    "@semantic-release/changelog": "6.0.1",
    "@semantic-release/git": "10.0.1",
    "babel-jest": "29.0.3",
    "babel-preset-gatsby": "2.23.0",
    "gatsby-plugin-utils": "3.17.1",
    "identity-obj-proxy": "3.0.0",
    "jest": "29.0.3",
    "prettier": "^2.6.2",
    "react-test-renderer": "18.2.0",
    "semantic-release": "19.0.5"
  }
}

```


```js
// plugin/package.json
    "scripts": {
        "postversion": "cp ../README.md ./README.md && cp ../CHANGELOG.md ./CHANGELOG.md"
    },
```


```js


```


```js


```


```js
// demo/src/pages/index.js
import * as React from "react";
import { graphql } from "gatsby";

export default function IndexPage({ data }) {
  return (
    <main>
      {data.allCloudinaryMedia.nodes.map(({ secure_url }) => {
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