---
title: 3 Global State ๐งโโ๏ธ Backwards compatible
author: "@OlaHolstVea"
date: 2022-06-20
---


### Taskerbell Task:

```js

// 3.0. npm i gatsby-plugin-utils

// 3.1. ๐ฉ๐ธOn๐๐ธ
let coreSupportsOnOluginInit = undefined;

// 3.2. try {} catch

  // 3.3. is๐NodeLife๐ดโโ๏ธ๐ธ from npm i gatsby-plugin-utils

  // 3.4. if is๐NodeLife๐ดโโ๏ธ๐ธ(`on๐๐ธ`) {
  //   ๐ฉ๐ธOn๐๐ธ === "๐ดโโ ๏ธ"
  // } else if (is๐NodeLife๐ดโโ๏ธ๐ธ(`un๐ดโโ ๏ธ_on๐๐ธ`)) {
  //   ๐ฉ๐ธOn๐๐ธ === "un๐ดโโ ๏ธ"
  // }


// 3.5.  ๐๐Options


// 3.6.  ๐ธ๐๐


// 3.7 if (๐ฉ๐ธOn๐๐ธ === 'stable') {} else if (๐ฉ๐ธOn๐๐ธ === 'unstable') {} else {๐คฏ.onPre๐ป๐ข = ๐ธ๐๐}

```


```shell
cd
cd

npm i gatsby-plugin-utils

```

```js


// packages/gatsby-transformer-cloudinary/gatsby-node.js

// Here is the Captain Cap Ola and Lillian (7 ๐ดโโ ๏ธ ๐ธ)  plugin upgrade code with emojis

// 3.0. npm i gatsby-plugin-utils

// 3.1. ๐ฉ๐ธOn๐๐ธ is undefined;
let coreSupportsOnOluginInit = undefined;

// 3.2. try {} catch
try {
  // 3.3. is๐NodeLife๐ดโโ๏ธ๐ธ from npm i gatsby-plugin-utils
  const { isGatsbyNodeLifecycleSupported } = require(`gatsby-plugin-utils`);

  // 3.4. if is๐NodeLife๐ดโโ๏ธ๐ธ(`on๐๐ธ`) {
  //   ๐ฉ๐ธOn๐๐ธ === "๐ดโโ ๏ธ"
  // } else if (is๐NodeLife๐ดโโ๏ธ๐ธ(`un๐ดโโ ๏ธ_on๐๐ธ`)) {
  //   ๐ฉ๐ธOn๐๐ธ === "un๐ดโโ ๏ธ"
  // }

  if (isGatsbyNodeLifecycleSupported(`onPluginInit`)) {
    console.log(`onPluginInit ๐ฌ`);
    coreSupportsOnPluginInit = "stable";
  } else if (isGatsbyNodeLifecycleSupported(`unstable_onPluginInit`)) {
    console.log(` un onPluginInit ๐ฌ`);
    coreSupportsOnPluginInit = "unstable";
  }
} catch (error) {
  console.error(`could not check`);
}

// 3.5.  ๐๐Options
const pluginOptions = getPluginOptions();

// 3.6.  ๐ธ๐๐
const initializaGlobalState = ({ reporter }, pluginOptions ) => {
  setPluginOptions({ reporter, pluginOptions });
};


// 3.7 if (๐ฉ๐ธOn๐๐ธ === 'stable') {} else if (๐ฉ๐ธOn๐๐ธ === 'unstable') {} else {๐คฏ.onPre๐ป๐ข = ๐ธ๐๐}
if (coreSupportsOnPluginInit === "stable") {
  console.log(`expo onPluginInit ๐ฌ`);
  exports.onPluginInit = initializeGlobalState;
} else if (coreSupportsOnPluginInit === "stable") {
  console.log(`expo unst onPluginInit ๐ฌ`);
  exports.unstable_onPluginInit = initializeGlobalState;
} else {
  console.log(`onPlreInit ๐ฌ`);
  exports.onPreInit = initializeGlobalState;
}

let emojisRepresent = {
  // swap out some of the emojis with code
  "on๐๐ธ": onPluginInit,
  "๐ฉ๐ธOn๐๐ธ": coreSupportsOnPluginInit,
  "is๐NodeLife๐ดโโ๏ธ๐ธ": isGatsbyNodeLifecycleSupported,
  "un๐ดโโ ๏ธ": "unstable",
  "๐ดโโ ๏ธ": "stable",
  "๐ธ๐๐": initializeGlobalState,.june under


```


```js


// gatsby-source-cloudinary/gatsby-node.js

// Here is the Captain Cap Ola and Lillian (7 ๐ดโโ ๏ธ ๐ธ)  plugin upgrade code with emojis

// 3.0. npm i gatsby-plugin-utils

// 3.1. ๐ฉ๐ธOn๐๐ธ is undefined;
let coreSupportsOnOluginInit = undefined;

// 3.2. try {} catch
try {
  // 3.3. is๐NodeLife๐ดโโ๏ธ๐ธ from npm i gatsby-plugin-utils
  const { isGatsbyNodeLifecycleSupported } = require(`gatsby-plugin-utils`);

  // 3.4. if is๐NodeLife๐ดโโ๏ธ๐ธ(`on๐๐ธ`) {
  //   ๐ฉ๐ธOn๐๐ธ === "๐ดโโ ๏ธ"
  // } else if (is๐NodeLife๐ดโโ๏ธ๐ธ(`un๐ดโโ ๏ธ_on๐๐ธ`)) {
  //   ๐ฉ๐ธOn๐๐ธ === "un๐ดโโ ๏ธ"
  // }

  if (isGatsbyNodeLifecycleSupported(`onPluginInit`)) {
    console.log(`onPluginInit ๐ฌ`);
    coreSupportsOnPluginInit = "stable";
  } else if (isGatsbyNodeLifecycleSupported(`unstable_onPluginInit`)) {
    console.log(` un onPluginInit ๐ฌ`);
    coreSupportsOnPluginInit = "unstable";
  }
} catch (error) {
  console.error(`Could not check if Gatsby supports onPluginInit lifecycle on๐๐ธ ๐ดโโ๏ธ`);
}

// 3.5.  ๐๐Options
//let globalPluginOptions = {};

// 3.6.  ๐ธ๐๐
const initializeGlobalState = (newCloudinary, getResourceOptions) => {
  newCloudinary;
  getResourceOptions;
};

// 3.7 if (๐ฉ๐ธOn๐๐ธ === 'stable') {} else if (๐ฉ๐ธOn๐๐ธ === 'unstable') {} else {๐คฏ.onPre๐ป๐ข = ๐ธ๐๐}
if (coreSupportsOnPluginInit === "stable") {
  console.log(`exports onPluginInit on๐๐ธ ๐`);
  exports.onPluginInit = initializeGlobalState;
} else if (coreSupportsOnPluginInit === "stable") {
  console.log(`exports unstable_onPluginInit ๐_on๐๐ธ ๐`);
  exports.unstable_onPluginInit = initializeGlobalState;
} else {
  console.log(`exports onPrebootstrap onPre๐ป๐ข`);
  exports.onPrebootstrap = initializeGlobalState;
}

let emojisRepresent = {
  // swap out some of the emojis with code
  "on๐๐ธ": onPluginInit,
  "๐ฉ๐ธOn๐๐ธ": coreSupportsOnPluginInit,
  "is๐NodeLife๐ดโโ๏ธ๐ธ": isGatsbyNodeLifecycleSupported,
  "un๐ดโโ ๏ธ": "unstable",
  "๐ดโโ ๏ธ": "stable",
  "๐ธ๐๐": initializeGlobalState,.june under


```

docs

[3. Global state](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-source-plugin-from-v3-to-v4/#3-global-state)