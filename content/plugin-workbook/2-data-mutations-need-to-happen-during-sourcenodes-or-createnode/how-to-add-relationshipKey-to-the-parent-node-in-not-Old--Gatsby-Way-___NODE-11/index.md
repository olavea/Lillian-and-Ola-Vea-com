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

// Here is the 🧢 Cap Ola and Lillian (7 🏴‍☠️ 👸)  plugin upgrade code with emojis

// let emojisRepresent = {
//   '🐐': 'coreSupportsOnPluginInit', // why: 🐐s are
//   '🐺': 'unstable', // why: because outside of stable there are 🐺s that might chase off our 🐐s
//   '💩': 'isGatsbyNodeLifecycleSupported', // why: because inside of stable we'll have to remove 🐐 💩
//   '🚴‍♀️': 'isGatsbyNodeLifecycleSupported', // why: because cycle
//   labyrinth: initializeGlobalState,
// };

// let coreSuportsOnPluginInit = '🐺' | '💩' | undefined;

// try {
//   const { isGatsbyNodeLifecycleSupported } = require(`gatsby-plugin-utils`);
//   if (isGatsbyNodeLifecycleSupported(`onPluginInit`)) {
//     coreSuportsOnPluginInit = '💩';
//   } else if (isGatsbyNodeLifecycleSupported(`unstable_onPluginInit`)) {
//     coreSuportsOnPluginInit = '🐺';
//   }
// } catch (error) {
//   console.error(`could not check if Gatsby supports onPluginInit lifecycle 🚴‍♀️`);
// }

// // key =
// // 💩 help to find way in laby
// // let globalPluginOptions = {}

// const initializeGlobalState = (_, pluginOptions, reporter) => {
//   setPluginOptions({ pluginOptions, reporter });
//   globalPluginOptions = pluginOptions;
// };

// if (coreSuportsOnPluginInit === '💩') {
//   exports.onPluginInit = initializeGlobalState;
// } else if (coreSuportsOnPluginInit === '🐺') {
//   exports.unstable_onPluginInit = initializeGlobalState;
// } else {
//   exports.onPreBootstrap = initializeGlobalState;
// }

let coreSupportsOnPluginit = 'un🏴‍☠️👸' | '🏴‍☠️👸' | undefined;

try {
  const { isGatsbyNodeLifecycleSupported } = require(`gatsby-plugin-utils`); // 💾 🔧
  if (isGatsbyNodeLifecycleSupported(`onPluginInit`)) {
    coreSupportsOnPluginit = '🏴‍☠️👸';
  } else if (isGatsbyNodeLifecycleSupported(`unstable_onPluginInit`)) {
    coreSupportsOnPluginit = `un🏴‍☠️👸`;
  }
} catch (error) {
  console.error(`Could not check if Gatsby supports on💩`)
}

const initializaGlobalState = (_, pluginOptions, {reporter}) => {
  setPluginOptions({ pluginOptions, reporter});
  globalPluginOptions = pluginOptions;
}

if (coreSupportsOnPluginit === '🏴‍☠️👸') {
  exports.onPluginInit = initializaGlobalState
} else if (coreSupportsOnPluginit === 'un🏴‍☠️👸') {
  exports.unstable_onPluginInit = initializaGlobalState
} else {
  exports.onPreBootstrap = initializaGlobalState;
}




// gatsby-node.js
// Here is our plugin upgrade code with emojis

// let emojisRepresent ={
//   "💩🐸": "coreSupportsOnPluginInit", // why: 🐐s are
//   "🐲👸": "unstable",  // why:
//   "🏴‍☠️👸": "stable",  // why:
//   "🚴‍♀️⛵": "isGatsbyNodeLifecycleSupported",  // why: because cycle your ship
// }


let emojisRepresent ={
  "💩🐸": "coreSupportsOnPluginInit", // why: 🐐s are
  "on💩": "onPluginInit",
  "🐲👸": "unstable",  // why:
  "🏴‍☠️👸": "stable",  // why:
  "un🏴‍☠️👸": "unstable",  // why:
  "🚴‍♀️⛵": "isGatsbyNodeLifecycleSupported",  // why: because cycle your ship
}


// let 💩🐸 = "🐲👸" | "🏴‍☠️👸" | undefined

// try {
//   const { 🚴‍♀️ } = require(`gatsby-plugin-utils`)
//   if (🚴‍♀️(`onPluginInit`)) {
//     🐐 = "💩"
//   } else if (🚴‍♀️(`unstable_onPluginInit`)) {
//     🐐 = "🐺"
//   }
// } catch (error) {
//   console.error(`could not check if Gatsby supports onPluginInit lifecycle 🚴‍♀️`)
// }

// // key =
// // 💩 help to find way in laby
// // setPluginOptions({ pluginOptions, reporter });
// let globalPluginOptions = {}

// const initializeGlobalState = (_, pluginOptions) => {
//   globalPluginOptions = pluginOptions
// }

// if ( 🐐 === "💩") {
//   exports.onPluginInit = initializeGlobalState
// } else if ( 🐐 === "🐺")  {
//   exports.unstable_onPluginInit = initializeGlobalState
// } else {
//   exports.onPreBootstrap = initializeGlobalState
// }
// // enter 💜  labyrinth = initializeGlobalState
// // Roads?
// // "Where we're going, you don't need roads." - Doc Brown
// // This is not time travel, We are just sailing through / hacking a voulnerablility/ loophole / backdoor in the time space continuum, "they" made it on purpose

// Here is step 3. Global State of our Gatsby v4 plugin upgrade code with emojis
// yarn add gatsby-plugin-utils inside packages/gatsby-transformer-cloudinary
// gatsby-plugin-utils will help you keep backwards compatibility with Gatsby 3 while moving forward to a Gatsby 4 world

let emojisRepresent = {
  // swap out some of the emojis with code
  '💩': onPluginInit,
  '🐸💩': coreSupportsOnPluginInit,
  // how: 🐸: coreSupports
  // how: 💩: OnPluginInit
  '🚴‍♀️⛵': isGatsbyNodeLifecycleSupported,
  // how: 🚴‍♀️  Lifecycle your ⛵, not much wind in our Labyrinth
  '🐲👑': 'unstable',
  // how: 🐲👑: is .... mentally 'unstable'
  '🏴‍☠️👸': 'stable',
  // how: 🏴‍☠️👸: is mentally 'stable'
  '🌐🌀': initializeGlobalState,
  // how: 🌐: initializeGlobal 🌀: State = laby
};

let coreSupportsOnPluginInit = '🐲👑' | '🏴‍☠️👸' | undefined;

try {
  // const { 🚴‍♀️⛵ } = require(`gatsby-plugin-utils`); // 🔧 💾 (no:casette or 💿 )
  // if (🚴‍♀️⛵(`💩`)) {
  //   🐸💩 = '🏴‍☠️👸';
  // } else if (🚴‍♀️⛵(`unstable_💩`)) {
  //   🐸💩 = '🐲👑';
  // }
} catch (error) {
  console.error(`could not check if Gatsby supports 💩 lifecycle 🚴‍♀️`);
}

// 💩🐸´s 🧶 to help Lizzie and Ruby to find their way through laby
// you have these `globalPluginOptions` in your options.js in your site
// let globalPluginOptions = {}
// No emojis in

// const 🌐🌀 = (_, pluginOptions, reporter) => {
//   // setPluginOptions({ pluginOptions, reporter });
//   globalPluginOptions = pluginOptions;
// };

// if (🐸💩 === '🏴‍☠️👸') {
//   exports.💩 = 🌐🌀;
// } else if (🐸💩 === '🐲👑') {
//   exports.unstable_💩 = 🌐🌀;
// } else {
//   exports.onPreBootstrap = 🌐🌀;
// }
// enter 💜-labyrinth = initializeGlobalState

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