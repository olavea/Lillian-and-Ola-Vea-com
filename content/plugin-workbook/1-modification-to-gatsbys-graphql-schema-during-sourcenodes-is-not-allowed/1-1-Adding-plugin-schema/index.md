---
title: 1.1. Adding plugin schema 🔌 🎶 #3
author: "@OlaHolstVea"
date: 2022-06-20
---


### Taskerbell Task:

```js
// gatsby-node.js
// 1.1 🤯. 🔌 ☑️ s🎶  = ({ 🥳 }) => {

  // 1.2 return 🥳.📖({

    // 1.3  😹.🧶().®️().default(1000),

  //   })
// }
```

```shell
cd
cd

npm i gatsby-plugin-utils

```



```js

// /gatsby-source-cloudinary/gatsby-node.js
exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    cloudName: Joi.string().required(),
    apiKey: Joi.string().required(),
    apiSecret: Joi.string().required(),
    resourceType: Joi.string().default('image'),
    type: Joi.string().default('all'),
    maxResults: Joi.number().integer().positive().default(10),
    tags: Joi.boolean().default(false),
    prefix: Joi.string(),
    context: Joi.boolean(),
  });
};
```

```js
// /gatsby-transformer-cloudinary/packages/gatsby-transformer-cloudinary/gatsby-node.js

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    cloudName: Joi.string(),
    apiKey: Joi.string(),
    apiSecret: Joi.string(),
    uploadFolder: Joi.string(),
    uploadSourceInstanceNames: Joi.array().items(Joi.string()),
    fluidMaxWidth: Joi.number().integer().positive().default(1000),
    fluidMinWidth: Joi.number().integer().positive().default(200),
    createDerived: Joi.boolean().default(true),
    breakpointsMaxImages: Joi.number().integer().posititve().default(5),
    useCloudinaryBreakpoints: Joi.boolean().default(false),
    overwriteExisting: Joi.boolean().default(false),
    enableDefaultTransformations: Joi.boolean().default(false),
    alwaysUseDefaultBase64: Joi.boolean().default(false),
  });
};
```





docs
[https://joi.dev/api/?v=17.6.0#numberpositive](https://joi.dev/api/?v=17.6.0#numberpositive)
[https://joi.dev/api/?v=17.6.0#arrayitemstypes](https://joi.dev/api/?v=17.6.0#arrayitemstypes)

[How to validate plugin options](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/configuring-usage-with-plugin-options/#how-to-validate-plugin-options)