---
title: A New Gatsby Cloudinary plugin, but backwards compatible
author: "@OlaHolstVea"
date: 2022-06-12
---

"Why not make our new plugin backwards compatible with our old gatsby-transformer-cloudinary plugin?" Asked π Queen Raae when all three of the  --- team was on our way downtown to ....

After I show you how we made global state backwards compatible I'll answer π Queen Raae's "Why not backwards compatible plugin"  question stated above.

One example of backwards compatibility that Lillian (7 π΄ββ οΈπΈ ) and I worked on was global state. I'll soon show you how we made global state backwards compatible, but first I'll ask "why global state?" Because our plugin needs for example your π©οΈ_API_SECRET from your .env file at the right time in the build process.

```js
// gatsby-node.js

console.log(`onPluginInit π¬`);

// 3.0. npm i gatsby-plugin-utils

// 3.1. π©πΈOnππΈ is undefined;


// 3.2. try {} catch


  // 3.3. isπNodeLifeπ΄ββοΈπΈ from npm i gatsby-plugin-utils


  // 3.4. if π©πΈOnππΈ === "π΄ββ οΈ" or === "unπ΄ββ οΈ"


// 3.5. const πOptions


// 3.6. const

// 3.7.  πΈππ

// 3.8 if (π©πΈOnππΈ === 'stable') {} else if (π©πΈOnππΈ === 'unstable') {} else {}


let emojisRepresent = {
  // swap out some of the emojis with code
  'onππΈ': onPluginInit,
  'π©πΈOnππΈ': coreSupportsOnPluginInit,
  'isπNodeLifeπ΄ββοΈπΈ': isGatsbyNodeLifecycleSupported,
  'unπ΄ββ οΈ': 'unstable',
  'π΄ββ οΈ': 'stable',
  'πΈππ': initializeGlobalState,
};
```

