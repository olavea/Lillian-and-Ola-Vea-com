---
title: Pagination using iteration #1
author: "@OlaHolstVea"
date: 2022-05-08
---
(Draft)

Pagination using iteration #1

```js

// /gatsby-source-cloudinary/gatsby-node.js

const createCloudinaryNodes = async (
  gatsbyUtils,
  cloudinary,
  resourceOptions,
  { limit },
) => {
  const { actions, reporter } = gatsbyUtils;

  let nextCursor = null;

  do {
    const result = await cloudinary.api.resources({
      resource_type: 'image',
      max_results: limit < 10 ? limit : 10,
      next_cursor: nextCursor,
    });

    result.resources.forEach((resource) => {
      const transformations = 'q_auto,f_auto'; // Default CL transformations, todo: fetch base transformations from config maybe.

      resource.url = addTransformations(resource, transformations);
      resource.secure_url = addTransformations(resource, transformations, true);

      const nodeData = getNodeData(gatsbyUtils, resource);
      actions.createNode(nodeData);
    });

    reporter.info(
      `${REPORTER_PREFIX}: Added ${hasResources} ${NODE_TYPE} nodes(s)`,
    );
    nextCursor = result.next_cursor;

    limit = limit - 10;
  } while (nextCursor && limit > 0);
};

exports.sourceNodes = (gatsbyUtils, pluginOptions) => {
  const cloudinary = newCloudinary(pluginOptions);
  const resourceOptions = getResourceOptions(pluginOptions);

  return createCloudinaryNodes(gatsbyUtils, cloudinary, resourceOptions, {
    limit: 27,
  });
};

```
```js
// /gatsby-source-cloudinary/gatsby-node.js


```


Docs
[2. Data mutations need to happen during sourceNodes or onCreateNode](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-source-plugin-from-v3-to-v4/#2-data-mutations-need-to-happen-during-sourcenodes-or-oncreatenode)

