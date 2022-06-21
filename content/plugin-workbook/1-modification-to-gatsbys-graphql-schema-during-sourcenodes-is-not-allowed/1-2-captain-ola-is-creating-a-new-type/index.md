---
title: 1.2. Captain Ola is creating a new type 🐙
author: "@OlaHolstVea"
date: 2022-06-20
---


### Taskerbell Task:

```js

// gatsby-node.js

// 1.1 🤯.create🎶Customization

  // 1.2 create🐙
  // 1.3 🐙 TobbieCloudinaryMedia

  // 1.4 console.log("Cap'n Ola is creating a new type 🐙 ");

```

```js

// gatsby-node.js

// 1.1 🤯.create🎶Customization
exports.createSchemaCustomization = ({ actions }) => {
  const { createType } = actions;
  // 1.2 create🐙
  // 1.3 🐙 TobbieCloudinaryMedia
  createType(`
    type TobbieCloudinaryMedia implements Node {
      joinedAt: Date
    }
  `);

  // 1.4 console.log("Cap'n Ola is creating a new type 🐙 ");
  console.log("Cap'n Ola is creating a new type 🐙 ");
};
```


docs

[1. Modification to Gatsby’s GraphQL schema during sourceNodes is not allowed](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-source-plugin-from-v3-to-v4/#1-modification-to-gatsbys-graphql-schema-during-sourcenodes-is-not-allowed)