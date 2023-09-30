Giving back, THAT's what #Hacktoberfest is about for me. YOU can DO it! You don't have to be Harry otter of programming. For example:

▶️ Docs are valuable! ✍️

You know what's rarer than Haley's Comet ☄️?

Read @hummusonrails 🐦 below for the answer and tips & tricks

https://twitter.com/hummusonrails/status/1706666701654556760

```js

  }))).filter(fileNode => !!fileNode);

  // Store the mapping between the current node and the newly created File node
  if (fileNodes.length) {
    // This associates the existing node (of user-specified type) with the new
    // File nodes created via createRemoteFileNode. The new File nodes will be
    // resolved dynamically through the Gatsby schema customization
    // createResolvers API and which File node gets resolved for each new field
    // on a given node of the user-specified type is determined by the contents
    // of this mapping. The keys are based on the ID of the parent node (of
    // user-specified type) and the values are each a nested mapping of the new
    // image File field name to the ID of the new File node.
    const cacheKey = getCacheKeyForNodeId(node.id);
    const existingFileNodeMap = await options.cache.get(cacheKey);
    await options.cache.set(cacheKey, {
      ...existingFileNodeMap,
      [name]: fileNodes.map(({
        id
      }) => id)
    });
  }
}


    // This associates the existing node            (of user-specified type)
    // with the new File nodes created via createRemoteFileNode.
    // The new File nodes will be resolved dynamically through
    // the Gatsby schema customization createResolvers API
    // and which File node gets resolved for each new field on a given node of the user-specified type
    // is determined by the contents
    // of this mapping.
    // The keys are based on the ID of the parent node (of user-specified type) and
    //  the values are each a nested mapping of
    // the new image File field name to
    // the ID of the new File node.


```