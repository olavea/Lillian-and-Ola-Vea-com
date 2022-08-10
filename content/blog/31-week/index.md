---
title: A New Gatsby _ _ _ _ plugin, but backwards compatible
author: "@OlaHolstVea"
date: 2022-07-31
---
gatsby-node-helpers

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
                            if (cacheMediaData && checksum === cacheMediaData.checksum) {
                                if (fileNode) {
                                    //
                                }
                            }
                            if (!fileNode) {
                                // try
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

exports.createGatsbyImageResolver = ({actions}, {localMedia = false}) => {
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
                                // try
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


exports.createGatsbyImageResolver = ({actions}, {localMedia = false}) => {
    if (localMedia) {
        createResolvers({
            CosmicjsLocalMedia: {
                local: {
                    type: `File`,
                    async resolve(_args) {
                        if (source.url) {
                            if (cacheMediaData && checksum === cacheMediaData.checksum) {
                                if (fileNode) {

                                }
                            }
                            if (!fileNodeId) {
                                // try
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

exports.createGatsbyImageResolver = ({actions}, {localMedia = false}) => {
    if (localMedia) {
        createResolvers({
            CosmicjsLocalMedia: {
                local: {
                    type: `File`,
                    async resolve(_args) {
                        if (source.url) {
                            if (cacheMediaData && checksum === cacheMediaData.checksum) {
                                if (fileNode) {
                                    // fileNodeId
                                }
                            } // if not cache, download
                            if (!fileNodeId) {
                                try {
                                    // Get the fileNode
                                    fileNode = await createRemoteFileNode({
                                        url: source.url,
                                    });
                                    if (fileNode) {
                                        fileNodeId = fileNode.id;
                                        await cache.set(mediaDataCacheKey, {fileNodeId});
                                    }
                                } catch (error) {
                                    // ignore
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
// gatsby-source-cosmicjs / gatsby-image-resolver.js
exports.createGatsbyImageResolver = ({actions}, {localMedia = false}) => {
    if (localMedia) {
        createResolvers({
            CosmicjsLocalMedia: {
                local: {
                    type: `File`,

                    async resolve(source, _args, _context, _info) {
                        if (source.url) {
                            if (cacheMediaData && checksum === cacheMediaData.checksum) {
                                if (fileNode) {
                                    touchNode({
                                        nodeId: fileNodeID
                                    });
                                }
                            } // If we don't have cached data, download the file
                            if (!fileNodeId) {
                                try {

                                    // Get the filenode
                                    fileNode = await createRemoteFileNode({
                                        url: source.url,
                                    });
                                    if (fileNode) {
                                        fileNodeId = fileNode.id;
                                        await cache.set(mediaDataCacheKey, {fileNodeId});
                                    }
                                } catch (error) {
                                    // Ignore, but why?
                                    console.log(error);
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

let favDrink = 'coffee';

let numberOfCups = 3;

let changeMe = true;

changeMe = false;

const dinner = 'tacos';

dinner = 'pizza';

const testing;

var first = 'wes';

let age = 5;

const cool = true;first 'westerhof';

age = 400;

dog = 'snickers';


if (10 > 3) {
    console.log('Yeah!');
}

const years = 1;

if (years > 11) {
    console.log('Yeah!);
} else if

```

```js










let favDrink = 'coffee';

const cups = 4;

let changeMe = true;

changeMe = false;

const dinner = 'tacos';

dinner = 'pasta';

const testing

if ( cups > 4) {
    console.log('stop drinking');
}

if ( cups > 1) {
    console.log('keep drinking');
} else if ( cup > 4) {
    console.log('stop drinking');
}


let coreSupportsOnpluginInit = 'stable'

const initializeGlobalState = () => {
  console.log('Blub')
}


if (coreSupportsOnpluginInit === 'stable') {
  console.log('Yeah!')
  exports.onPluginInit = initializeGlobalState;
} else if (years > 10) {
  console.log('Yeah!')
  exports.unstable_onPluginInit = initializeGlobalState;
} else {
  exports.onPreBootstrap = initializeGlobalState;
}

let timeShip = {
  fuelType: 'diesel',
  color: 'silver',
}











```


