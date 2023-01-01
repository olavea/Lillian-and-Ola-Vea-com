---
title: Ola adds "async and await" to sourceNodes in his piraty plugin
tags: sourceNodes, gatsby-plugin practice
---

## Adding "async and await" to sourceNodes is a sub-task

In my daily gatsby-plugin practice, I ONLY do one sub-task each session. Today's sub-task:

- adding `async` to `exports.sourceNodes =` and
- `await createPiratyNodes(`

&nbsp;

I'll soon tell you WHY I do a daily sub-task, but first I'll give you an example of a sub-task.

## WHAT is a sub-task?

That dev-task YOU did last week? Close your eyes and see your dev-task as a pink donut. Bite off a useless-on-it's-own sub-task. NOW you can chew without choking. \*

![Donut_shark_by_Lillian_Raae-Vea](./Donut_shark_by_Lillian_Raae-Vea-pink.png)

## HOW do you find your sub-task?

A. Look up a dev-task you did last week

B. Bite off a useless-on-it's-own sub-task

That's all 😺

## WHY do I do a sub-task?

Because a tiny sub-task gives me better practice than the whole dev-task.

## Here is my code before practice

```js
// gatsby-node.js

const piraty = `source piraty api here`;

const createPiratyNodes = async (gatsbyUtils) => {
  console.log(`create Piraty Nodes here`);
};

// Add async

exports.sourceNodes = (gatsbyUtils) => {
  // Add await

  createPiratyNodes(gatsbyUtils, piraty);
};
```

## After practice

```js
// gatsby-node.js

const piraty = `source piraty api here`;

const createPiratyNodes = async (gatsbyUtils) => {
  console.log(`create Piraty Nodes here`);
};

// Add async

exports.sourceNodes = async (gatsbyUtils) => {
  // Add await

  await createPiratyNodes(gatsbyUtils, piraty);
};
```

Try a sub-task on your own dev-brain, maybe your practice becomes more piraty 🏴‍☠️😺👍

ARR!

Cap'n Ola Vea

&nbsp;

**P.S**

The next plugin-pirate letter will cover "What type of sub-task is right for your dev-brain?"

\* Some people CAN chew a whole donut without choking on it. Don't believe me? Dig up the video with Paul Scanlon winning a donut-eating contest against a Gatsby co-worker. You'll find the video somewhere [on Paul's twitter.](https://twitter.com/PaulieScanlon)

Read more about adding async await to sourceNodes in Queen @raae's email [Remember to await node creation! ⏳ ⌛️](/emails/2022-05-25-await-node-creation/)
