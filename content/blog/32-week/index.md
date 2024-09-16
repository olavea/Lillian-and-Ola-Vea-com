---
title: A New Gatsby _ _ _ _ plugin, but backwards compatible
author: "@OlaHolstVea"
date: 2022-07-31
---


```js
// gatsby-transformer-cloudinary
// gatsby-node.js



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
                            // if (cacheMediaData && checksum === cacheMediaData.checksum) {
                            //     if (fileNode) {
                            //         //
                            //     }
                            // }
                            // if (!fileNode) {
                            //     // try
                            // }
                            // if (fileNode) {
                            //     return fileNode;
                            // }
                        }
                        return null;
                    }
                }
            }
        });
    }
};

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
const  age = 33;

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


