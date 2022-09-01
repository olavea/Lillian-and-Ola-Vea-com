---
title: A Gatsby _ _ _ _ plugin practice, but backwards compatible
author: "@OlaHolstVea"
date: 2022-07-31
---





```js
// gatsby-plugin-starter-local
// gatsby-node.js



```

```js
// gatsby-plugin-starter-local
// gatsby-node.js



```

```js
// gatsby-plugin-starter-local
// gatsby-node.js



```

```js
// gatsby-plugin-starter-local
// gatsby-node.js

var kroppsDeler = ["TRYNE", "RUMPEHULL", "HÅR"];

var words = ["STINKENDE", "kjedelig", "DUM"];


var dyr = ["flue", "HUND", "KATT", "LANDKRABBE", "GULL"];

var dyreDel = ["TRYNE", "RUMPEHULL", "HÅR"];


var kroppsdel = kroppsDeler[Math.floor(Math.random() * 3)];

var word = words[Math.floor(Math.random() * 3)];

var dyre = dyr[Math.floor(Math.random() * 5)];

var dyreKroppsdel = dyreDel[Math.floor(Math.random() * 3)];

// var utskjelling =
//   "Ditt " + kroppsdel + " er som en " + word + " " + banneOrdet + "!!!";

var utskjelling =
  "Ditt " + kroppsdel + " er mer " + word + " enn en " + dyre + "s " + dyreKroppsdel + "!!!";

utskjelling;



```

```js
// gatsby-plugin-starter-local
// gatsby-node.js





var kroppsDeler = ["TRYNE", "RUMPEHULL", "HÅR"];

var words = ["STINKENDE", "kjedelig", "DUM"];


var dyr = ["flue", "HUND", "KATT", "LANDKRABBE", "GULL"];

var dyreDel = ["TRYNE", "RUMPEHULL", "HÅR"];


var kroppsdel = kroppsDeler[Math.floor(Math.random() * 3)];

var word = words[Math.floor(Math.random() * 3)];

var dyre = dyr[Math.floor(Math.random() * 5)];

var dyreKroppsdel = dyreDel[Math.floor(Math.random() * 3)];

// var utskjelling =
//   "Ditt " + kroppsdel + " er som en " + word + " " + banneOrdet + "!!!";

var utskjelling =
  "Ditt " + kroppsdel + " er mer " + word + " enn en " + dyre + "s " + dyreKroppsdel + "!!!";

utskjelling;
```

```js
// gatsby-transformer-cloudinary
// gatsby-node.js




function initGlobaOptions() {

}

const initGlobOptions = () => {
  console.log(`Beat it!`);
}

const inchToCM = inches => inches*2.54;


let coreSupportsOnPluginInit = undefined;

try {
  const { isGatsbyNodeLifecycleSupported } = require(`gatsby-plugin-utils`);
  if (isGatsbyNodeLifecycleSupported(`onPluginInit`)) {
    coreSupportsOnPluginInit = 'stable';
  } else if (isGatsbyNodeLifecycleSupported(`unstable_onPluginInit`)) {
    coreSupportsOnPluginInit = 'unstable';
  }
} catch (error) {
  console.error(
    `[gatsby-transformer-cloudinary] Cannot check if Gatsby supports onPluginInit`
  );
}

const initializaGlobalState = ({ reporter }, pluginOptions) => {
  setPluginOptions({ reporter, pluginOptions });
};

if (coreSupportsOnPluginInit === 'stable') {
  exports.onPluginInit = initializaGlobalState;
} else if (coreSupportsOnPluginInit === 'unstable') {
  exports.unstable_onPluginInit = initializaGlobalState;
} else {
  exports.onPreInit = initializaGlobalState;
}
```


```js
// https://github.com/cloudinary-devs/gatsby-source-cloudinary/blob/main/gatsby-node.js
// gatsby-node.js



  let nextCursor = null;
  let limit = max_results;
  let resultsPerPage = results_per_page;


   if (result.resources.length === 0) {
        reporter.warn(
          `${REPORTER_PREFIX}: No Cloudinary resources found. Try a different query?`,
        );
    } else {
        reporter.info(
            `${REPORTER_PREFIX}: Added ${result.resources.length} ${NODE_TYPE} nodes(s)`,
        );
    }

```



```js

var kroppsDeler = ["TRYNE", "RUMPEHULL", "HÅR"];

var words = ["stinkende", "kjedelig", "DUM"];

var banneOrd = ["flue", "poop", "drittstøvel", "landkrabbe", "BÆSJ"];

var kroppsdel = kroppsDeler[Math.floor(Math.random() * 3)];

var word = words[Math.floor(Math.random() * 3)];

var banneOrdet = banneOrd[Math.floor(Math.random() * 5)];

var utskjelling =
  "Ditt " + kroppsdel + " er som en " + word + " " + banneOrdet + "!!!";

utskjelling;

var kroppsDeler = ["tryne", "rumpehull", "hår"];

var words = ["stinkende", "kjedelig", "dum"];

var banneOrd = ["flue", "poop", "drittstøvel", "landkrabbe", "bæsj"];

var kroppsdel = kroppsDeler[Math.floor(Math.random() * 3)];

var word = words[Math.floor(Math.random() * 3)];

var banneOrdet = banneOrd[Math.floor(Math.random() * 5)];

var utskjelling =
  "Ditt " + kroppsdel + " er som en " + word + " " + banneOrdet + "!!!";

utskjelling;

const theseussTimeShip = "gOlda";

theseussTimeShip[1];

theseussTimeShip[2];

theseussTimeShip[4];

const theseussTimeShip = "gold";

theseussTimeShip.length;

var hi = `Hi! `;
var myName = `Ola`;
hi + myName;

"theseussTimeShip".length;

var functionOtello = function () {
  console.log(`Sterk`);
};
functionOtello();

const inchesTooCM = (inches) => inches * 2.54;

const micaJayFox = (foxes) => foxes * 33;
const theseussTimeShip = (gold) => gold - 2;
theseussTimeShip(2);

const TimeShip = (gol) => gol * 2;
TimeShip(1);

const MyrdDina = (time) => time + 2;
MyrdDina(1);

function inchesToooCM(inches) {
  const cm = inches * 2.54;
  return cm;
}
inchesToooCM(1);

function calcuSam(meal, taxRate) {
  const bill = meal + 1 * taxRate;
  return bill;
}

calcuSam(33);

function calcSam(billAmount, taxRate) {
  const total = billAmount * (1 + taxRate);
}

function calculateBill(params) {
  const total = 100 * 1.13;
  console.log(total);
  return total;
}

calculateBill();

const myTotal = calculateBill();

console.log(myTotal);

var drawCats = function (params) {};

// var sayHiTo = function(name) {
//   console.log(`Hi `, name, `!`)
// };

// sayHiTo(`Lillian`)

var MicJFunc = function (navn) {
  console.log(`Beat it `, navn);
};
MicJFunc(`Lillian`);

var FunctionOtello = function name(params) {
  console.log(`Verdens sterkeste opera`);
};

function inch2CM(inc) {
  inc * 2.54;
}

const inch2 = function () {};

const inchesToCM = (inches) => inches * 2.54;


```

```js

// gatsby-image-resolver.js
exports.createGatsbyImageResolver = ({
    {createNode, touchNode}
}, {
    localMedia = false
}) => {
    if (localMedia) {
        createResolvers({
            CosmicjsLocalMedia: {
                local: {
                    type: `File`,
                    async resolve(_args) {
                        if (source.url) {
                            if (cacheMediaData && checksum === cacheMediaData.checksum) {
                                if (fileNode) {
                                    //
                                }
                            }
                            if (!fileNode) {
                                try {
                                    // Get the filenode
                                    fileNode = await createRemoteFileNode({
                                        url: source.url,
                                        store,
                                        cache,
                                        createNode,
                                        createNodeId,
                                        reporter
                                    });

                                    if (fileNode) {
                                        fileNodeID = fileNode.id;
                                        await cache.set(mediaDataCacheKey, {
                                            fileNodeID,
                                            checksum: checksum
                                        });
                                    }
                                } catch (e) {
                                    // Ignore
                                    console.log(e);
                                    return null;
                                }
                            }
                            if (fileNode) {
                                return fileNode;
                            }
                        }
                        return null;
                    }
                }
            }
        });
    }
}

```


```js
// gatsby-node.js
const age = 33;

const person = {
    age: age,
    name: 'wes',
}
const helperObject = {
    createContentDigest,
    createNode,
    localMedia,
}

apiAccess = {},

```



```js
// utils.js
let media = {
    _id: id,
    value,
    url,
    imgix_rl,
}


```



```js
let helperObject = {
    createContentDigest,
    createNode,
    localMedia,
}

if (localmedia) {
    createResolvers({})
}

```



```js

let localMedia = true;

if (localMedia) {
    console.log(`createResolvers`);
};

let mood = `cody`;
let codingReadyLevel = 9;

if (mood === `cody` && codingReadyLevel > 8) {
    console.log(`createResolvers`);
} else {
    console.log(`not time to createResolvers yet`);
}

```



```js

if (mood === `cody` && createResolver > 8) {
    console.log(`createResolvers`);
} else {
    console.log(`not createResolvers`);
}

if (webhookBody && webhookBody.type) {
  const item = webhookBody.data
  // look to see if my content creator worked
  return
}


```



```js


      if (result.resources.length === 0) {
        reporter.warn(
          `${REPORTER_PREFIX}: No Cloudinary resources found. Try a different query?`,
        );
      } else {
        reporter.info(
          `${REPORTER_PREFIX}: Added ${result.resources.length} ${NODE_TYPE} nodes(s)`,
        );
      }
```



```js
// source-cloudinary
  // Create nodes for files to be uploaded to cloudinary
  if (
    pluginOptions.apiKey &&
    pluginOptions.apiSecret &&
    pluginOptions.cloudName
  ) {
    await createAssetNodeFromFile(gatsbyUtils, pluginOptions);
  }
```



```js



// transform-cloudinary

exports.createRemoteImageNode = async ({
  url,
  overwriteExisting,
  parentNode,
  relationshipName,
  createContentDigest,
  createNode,
  createNodeId,
  createNodeField,
  reporter,
}) => {
  if (!createContentDigest) {
    reporter.panic(
      "`createContentDigest` is a required argument. It's available at `CreateNodeArgs.createContentDigest`."
    );
  }



  let relationshipKey = `${relationshipName}`;

  createNodeField({
    node: parentNode,
    name: relationshipKey,
    value: imageNode.id,
  })

  // Tell Gatsby to add `${relationshipName}` to the parent node. The old way.
  relationshipKey = `${relationshipName}___NODE`;
  parentNode[relationshipKey] = imageNode.id;
  return imageNode;
};



```




```js
// this is gone in our upgraded plugin
exports.createAssetNodesFromData = ({
  node,
  actions: { createNode },
  createNodeId,
  createNodeField,
  createContentDigest,
}) => {

// ....
  assetDataPaths.forEach((assetDataPath) => {
    // ....
    if (verifyAssetData(assetData)) {
      createCloudinaryAssetNode({
        assetData,
        createContentDigest,
        createNode,
        createNodeId,
        createNodeField,
        parentNode: node,
        relationshipName,
        assetDataPath,
      });
    }
  });
}
function createCloudinaryAssetNode({
    // ....
  createNodeField,
  parentNode,
  relationshipName,
}) {
    // ....
  // Tell Gatsby to add `${relationshipName}` to the parent node. The new way
  let relationshipKey = `${assetDataPath || relationshipName}`;

  createNodeField({
    node: parentNode,
    name: relationshipKey,
    value: imageNode.id,
  });

  // Tell Gatsby to add `${relationshipName}` to the parent node. The old way
  relationshipKey = `${assetDataPath || relationshipName}___NODE`;
  set(parentNode, relationshipKey, imageNode.id);
}

```




```js

```




```js

```




```js



```


