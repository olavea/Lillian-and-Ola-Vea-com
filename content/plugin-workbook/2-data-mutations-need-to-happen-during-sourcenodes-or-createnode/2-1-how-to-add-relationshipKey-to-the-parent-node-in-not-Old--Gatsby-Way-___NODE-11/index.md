---
title: How to add relationshipKey to the parent node in not-Old- Gatsby-Way ___NODE
author: "@OlaHolstVea"
date: 2022-05-08
---
(Draft)

What do "direct manipulation of a node" mean?

Direct manipulation assigns properties to the node like it was a regular javascript object.


```js

// packages/gatsby-transformer-cloudinary/node-creation/create-asset-nodes-from-data.js
  // 💜⛵🔑
  // 💜⛵Lillian
  const 💜⛵🔑 = `${assetDataPath || 💜⛵Lillian}`;


  // basic JS should happen inside Jamstackia
  // a variable because .... and what does it do?
  // and the value is ....

// and
  // name inside a node is also called a key
  // using the variable to name a 🍓-field

  createNodeField({
    parentNode,
    name: "💜⛵🔑",
    value: "🖼️💰.🆔",
  });

  // Tell Gatsby to add `${relationshipName}` to the parent node.
  // const relationshipKey = `${assetDataPath || relationshipName}___NODE`;
  // set(parentNode, relationshipKey, imageNode.id);
```
```js
//gatsby-transformer-cloudinary/packages/gatsby-transformer-cloudinary/package.json
"gatsby-plugin-utils": "^3.9.0",

```


Docs
[2. Data mutations need to happen during sourceNodes or onCreateNode](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-source-plugin-from-v3-to-v4/#2-data-mutations-need-to-happen-during-sourcenodes-or-oncreatenode)


```js

// packages/gatsby-transformer-cloudinary/gatsby-node.js

```
```js
//gatsby-transformer-cloudinary/packages/gatsby-transformer-cloudinary/gatsby-image/index.js

// Cap-Ola-Vea: Question 5.1: Is this an Old Gatsby Way look-a-like? Compare at source:
const fs = require('fs-extra');

const {
  getFixedImageObject,
  getFluidImageObject,
} = require('./get-image-objects');
const { gatsbyImageTypes } = require('./types');

exports.addFragments = async ({ store, getNodesByType }) => {
  const program = store.getState().program;

  // Check if there are any CloudinaryAsset nodes. If so add fragments for CloudinaryAsset.
  // The fragment will cause an error if there are no CloudinaryAsset nodes.
  if (getNodesByType(`CloudinaryAsset`).length == 0) {
    return;
  }

  // We have CloudinaryAsset nodes so let’s add our fragments to .cache/fragments.
  // Cap-Ola-Vea: Question 5.2: Is this an Old Gatsby Way look-a-like? Compare at source:
  await fs.copy(
    require.resolve(`./fragments.js`),
    `${program.directory}/.cache/fragments/cloudinary-asset-fragments.js`
  );
};

```