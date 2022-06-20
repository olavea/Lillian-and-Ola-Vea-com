---
title: Gatsby-plugin-upgrade
author: "@OlaHolstVea"
date: 2022-05-31
---

## 3 Global State 🧚‍♀️

Taskerbell-task: 🧚‍♀️

- **WHAT**: `onPluginInit` upgrade of gatsby-cloudinary by 🧢 Cap Ola and Lillian (7 🏴‍☠️ 👸)
- **WHY**: faster builds and faster develop time so our user can escape the Croco-Clock
- **HOW**: is 5 tasks

## How: task 3 of 5

```js
// gatsby-node.js

// The Old Way
// onPreInit is setting 🌐 global state
// so that other functions can access that global state. Which is The Old Way. And used here 😉

// Is this let just to explain in the docs? And not part of our actual code?
let coreSupportsOnPluginInit = undefined;

try {
  const { isGatsbyNodeLifeCycleSupported } = require(`gatsby-plugin-utils`);
  if (isGatsbyNodeLifeCycleSupported(`onPluginInit`)) {
    coreSupportsOnPluginInit = 'stable';
  } else if (isGatsbyNodeLifeCycleSupported(`unstable_onPluginInit`)) {
    coreSupportsOnPluginInit = 'unstable';
  }
} catch (error) {
  console.error(
    `Could not check if Gatsby supports onPluginInit lifecycle 🚴‍♀️  `,
  );
}

// let globalPluginOptions = {};
// Question: Is this let just to explain in the docs? And not part of our actual code?
// Answer: Yes, in our case it's set inside `./options.js` – Queen raae
// called let options = {};


const initializeGlobalState = (_, pluginOptions) => {
  setPluginOptions({ pluginOptions, reporter });

  globalPluginOptions = pluginOptions;
};

if (coreSupportsOnPluginInit === 'stable') {
  exports.onPluginInit = initializeGlobalState;
} else if (coreSupportsOnPluginInit === 'unstable') {
  exports.unstable_onPluginInit = initializeGlobalState;
} else {
  exports.onPreBootstrap = initializeGlobalState;
}

// function in /packages/gatsby-transformer-cloudinary/options.js ?
```

```js
// gatsby-node.js
// Here is our plugin upgrade code with emojis

let emojisRepresent ={
  "🐐": "coreSupportsOnPluginInit", // why: 🐐s are
  "🐺": "unstable",  // why: because outside of stable there are 🐺s that might chase off our 🐐s
  "💩": "isGatsbyNodeLifecycleSupported",  // why: because inside of stable we'll have to remove 🐐 💩
  "🚴‍♀️": "isGatsbyNodeLifecycleSupported",  // why: because cycle
}

let 🐐 = "🐺" | "💩" | undefined

try {
  const { 🚴‍♀️ } = require(`gatsby-plugin-utils`)
  if (🚴‍♀️(`onPluginInit`)) {
    🐐 = "💩"
  } else if (🚴‍♀️(`unstable_onPluginInit`)) {
    🐐 = "🐺"
  }
} catch (error) {
  console.error(`could not check if Gatsby supports onPluginInit lifecycle 🚴‍♀️`)
}

// key =
// 💩 help to find way in laby
let globalPluginOptions = {}

const initializeGlobalState = (_, pluginOptions) => {
  globalPluginOptions = pluginOptions
}

if ( 🐐 === "💩") {
  exports.onPluginInit = initializeGlobalState
} else if ( 🐐 === "🐺")  {
  exports.unstable_onPluginInit = initializeGlobalState
} else {
  exports.onPreBootstrap = initializeGlobalState
}
// labyrinth = initializeGlobalState
```
🔑

key =
🏷️
💩🐍🐉🐲
