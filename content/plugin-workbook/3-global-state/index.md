---
title:
author: "@OlaHolstVea"
date: 2022-06-20
---


### Taskerbell Task:

```js

// 3.0. npm i gatsby-plugin-utils

// 3.1. 💩🐸On🔌👸 is undefined;
let coreSupportsOnOluginInit = undefined;

// 3.2. try {} catch

  // 3.3. is💜NodeLife🚴‍♀️🐸 from npm i gatsby-plugin-utils

  // 3.4. if 💩🐸On🔌👸 === "🏴‍☠️" or === "un🏴‍☠️"

// 3.5. const global🔌Options


// 3.6.  👸🌐🌀


// 3.7 if (💩🐸On🔌👸 === 'stable') {} else if (💩🐸On🔌👸 === 'unstable') {} else {}

```


```shell
cd
cd

npm i gatsby-plugin-utils

```

```js


// packages/gatsby-transformer-cloudinary/gatsby-node.js

// Here is the Captain Cap Ola and Lillian (7 🏴‍☠️ 👸)  plugin upgrade code with emojis

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
const pluginOptions = getPluginOptions();

// 3.6.  👸🌐🌀
const initializaGlobalState = ({ reporter }, pluginOptions ) => {
  setPluginOptions({ reporter, pluginOptions });
};


// 3.7 if (💩🐸On🔌👸 === 'stable') {} else if (💩🐸On🔌👸 === 'unstable') {} else {}
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
  "👸🌐🌀": initializeGlobalState,.june under


```


```js


// gatsby-source-cloudinary/gatsby-node.js

// Here is the Captain Cap Ola and Lillian (7 🏴‍☠️ 👸)  plugin upgrade code with emojis

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
let globalPluginOptions = {};

// 3.6.  👸🌐🌀
const initializaGlobalState = ( newCloudinary, pluginOptions ) => {
    // I a not sure if I am guessing right on how I am using newCloudinary && getResourceOptions
  // and how do I test if this works?
  const cloudinary = newCloudinary(options);
  const resourceOptions = getResourceOptions(options);

  return globalPluginOptions(cloudinary, resourceOptions);
};

// 3.7 if (💩🐸On🔌👸 === 'stable') {} else if (💩🐸On🔌👸 === 'unstable') {} else {}
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
  "👸🌐🌀": initializeGlobalState,.june under


```

docs

[3. Global state](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-source-plugin-from-v3-to-v4/#3-global-state)