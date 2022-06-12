---
title: A New Gatsby Cloudinary plugin, but backwards compatible
author: "@OlaHolstVea"
date: 2022-06-12
---

"Why not make our new plugin backwards compatible with our old gatsby-transformer-cloudinary plugin?" Asked 👑 Queen Raae when all three of the  --- team was on our way downtown to ....

After I show you how we made global state backwards compatible I'll answer 👑 Queen Raae's "Why not backwards compatible plugin"  question stated above.

One example of backwards compatibility that Lillian (7 🏴‍☠️👸 ) and I worked on was global state. I'll soon show you how we made global state backwards compatible, but first I'll ask "why global state?" Because our plugin needs for example your 🌩️_API_SECRET from your .env file at the right time in the build process.

```js
// gatsby-node.js

console.log(`onPluginInit 😬`);

// 3.0. npm i gatsby-plugin-utils

// 3.1. 💩🐸On🔌👸 is undefined;


// 3.2. try {} catch


  // 3.3. is💜NodeLife🚴‍♀️🐸 from npm i gatsby-plugin-utils


  // 3.4. if 💩🐸On🔌👸 === "🏴‍☠️" or === "un🏴‍☠️"


// 3.5. const 🔌Options


// 3.6. const

// 3.7.  👸🌐🌀

// 3.8 if (💩🐸On🔌👸 === 'stable') {} else if (💩🐸On🔌👸 === 'unstable') {} else {}


let emojisRepresent = {
  // swap out some of the emojis with code
  'on🔌👸': onPluginInit,
  '💩🐸On🔌👸': coreSupportsOnPluginInit,
  'is💜NodeLife🚴‍♀️🐸': isGatsbyNodeLifecycleSupported,
  'un🏴‍☠️': 'unstable',
  '🏴‍☠️': 'stable',
  '👸🌐🌀': initializeGlobalState,
};
```

