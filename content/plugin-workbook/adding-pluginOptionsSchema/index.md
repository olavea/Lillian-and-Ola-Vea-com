---
title: Ola is pluginOptionsSchema to a local source-plugin and to gatsby-transformer-cloudinary
---

Adding pluginOptionsSchema to
// gatsby-node.js


Sub-task



// 1.1 🤯. 🔌 ☑️ s🎶  = ({ 🥳 }) => {
export a function where you pass inn Joi
    // 1.2 return 🥳.📖({
  return a Joi object
      // 1.3  🥳.🧶().®️().default(1000),
      Add key value pairs
//      cloudName: Joi.string().required()
//     })
// };


[e88d3a5](https://github.com/raae/gatsby-transformer-cloudinary/pull/9/commits/e88d3a5aad945d14c9d4ae68021c13667d02bff7)

```js

// gatsby-transformer-cloudinary demo/src/pages/index.js

// packages/gatsby-transformer-cloudinary/gatsby-node.js
// gatsby-node.js
// 1.1 🤯. 🔌 ☑️ s🎶  = ({ 🥳 }) => {
exports.pluginOptionsSchema = ({ Joi }) => {
  // 1.2 return 🥳.📖({
  return Joi.object({
    // 1.3  🥳.🧶().®️().default(1000),
    cloudName: Joi.string(),
    apiKey: Joi.string(),
    apiSecret: Joi.string(),
    uploadFolder: Joi.string(),
    uploadSourceInstanceNames: Joi.array().items(Joi.string()),
    transformTypes: Joi.array().items(Joi.string()).default('CloudinaryAsset'),
    overwriteExisting: Joi.boolean().default(false),
    defaultTransformations: Joi.array()
      .items(Joi.string())
      .default(['c_fill', 'g_auto', 'q_auto']),
  });
};
```


gatsby-source-cloudinary
```js
// demo/src/pages/index.js
// gatsby-node.js

// plugin/gatsby-node.js

// 1.1 🤯. 🔌 ☑️ s🎶  = ({ 🥳 }) => {
exports.pluginOptionsSchema = ({ Joi }) => {
  // 1.2 return 🥳.📖({
  return Joi.object({
    // 1.3  🥳.🧶().®️().default(1000),
    cloudName: Joi.string(),
    apiKey: Joi.string(),
    apiSecret: Joi.string(),
    resourceType: Joi.string().default('image'),
    maxResults: Joi.number().integer().positive().default(10),
    type: Joi.string().default('all'),
    resultsPerPage: Joi.number().integer().positive().default(Joi.ref('maxResults')),
    tags: Joi.boolean().default(false),
    context: Joi.boolean(),
  });
};


```
```js
// demo/src/pages/index.js
```
```js
// demo/src/pages/index.js
```