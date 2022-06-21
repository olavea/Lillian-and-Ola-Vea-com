---
title: 1.1. Adding plugin schema
author: "@OlaHolstVea"
date: 2022-06-20
---


### Taskerbell Task:

```js
// gatsby-node.js
// 1.1 🤯. 🔌 ☑️ 🎶  = ({ 😹 }) => {

  // 1.2 return 😹.📖({

    // 1.3  😹.🧶().®️().💁(`Enables`),


  //   })
// }
```

```shell
cd
cd

npm i gatsby-plugin-utils

```

```js

// gatsby-node.js
exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    cloudName: Joi.string().required(),
    apiKey: Joi.string().required(),
    apiSecret: Joi.string().required(),
    resourceType: Joi.string().required(),
    type: Joi.string().required(),
    maxResults: Joi.string().required(),
    tags: Joi.string().required(),
    prefix: Joi.string().required(),
    context: Joi.string().required(),
  });
};


```


docs

[How to validate plugin options](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/configuring-usage-with-plugin-options/#how-to-validate-plugin-options)