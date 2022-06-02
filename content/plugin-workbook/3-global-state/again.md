
```js
// gatsby-node.js// Here is step 3. Global State of our Gatsby v4 plugin upgrade code with emojis

let emojisRepresent ={
  // swap out the un"" apostroped emojis with this code
  "🐸💩": coreSupportsOnPluginInit, // how: 🐸: coreSupportsOn
  // how: 💩: pluginInit
  // why: shit to the core ?
  "🐲👑": "unstable",  // how: My dad's sanity is .... unstable
  "🏴‍☠️👸": "stable",  // how: My dad's sanity is .... unstable why:
  "🚴‍♀️⛵": isGatsbyNodeLifecycleSupported,  // why: because cycle your ship, not much wind in Laby
  // how: good thing you brought those two slave boys, even though they're scrawny rats
}

let coreSupportsOnPluginInit = "🐲👑" | "🏴‍☠️👸" | undefined

try {
  const { 🚴‍♀️⛵ } = require(`gatsby-plugin-utils`) // 🔧 💾 :casette or 💿
  if ( 🚴‍♀️⛵(`onPluginInit`)) {
    🐸💩 = "🏴‍☠️👸"
  } else if (🚴‍♀️⛵(`unstable_onPluginInit`)) {
    🐸💩 = "🐲👑"
  }
} catch (error) {
  console.error(`could not check if Gatsby supports onPluginInit lifecycle 🚴‍♀️`)
}

// key =
// 💩🐸´s 🧶 to help Lizzie and Ruby to find their way through laby
// you have this in your options.js in your site
// let globalPluginOptions = {}

const initializeGlobalState = (_, pluginOptions, reporter ) => {
  // setPluginOptions({ pluginOptions, reporter });
  globalPluginOptions = pluginOptions
}

if ( 🐸💩 === "🏴‍☠️👸") {
  exports.onPluginInit = initializeGlobalState
} else if ( 🐸💩 === "🐲👑")  {
  exports.unstable_onPluginInit = initializeGlobalState
} else {
  exports.onPreBootstrap = initializeGlobalState
}
// labyrinth = initializeGlobalState
```
🐉