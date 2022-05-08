---
title: Creating a Gatsby-source-plugin
author: "@OlaHolstVea"
date: 2022-05-08
---

### What:
We create 1 node with the id from 1 youtube video,

### Why:
To prepare for sourcing only our favourite videos from youtube. Because youtube is NOT a safe tool for Lillian (7 🏴‍☠️👸) and her skill-builder friends.

### How:
G.i. of G.i.G.G.L.E.S.

G. Get data later, create node now
i. = I  a.c.t.i.o.n.s

### Let's G.i. Go 📺 !

G. Get data later, create node now

```js
exports.sourceNodes = async (params) => {
  // Get 1 video ready to be sourced into our GraphQL-Gatsby-data river without sinking
  await Promise.all([bakeOneNodeGetOneVideo(params)]);
}
```

```js
async function bakeOneNodeGetOneVideo() {

}
```

I. id

```js
  const POW_TUBE_ID = "UGq8cnNTbwI"
  const nodeID = {
    id: POW_TUBE_ID,
  }
  console.log('⛵💀 Yo-Ho Yo-Ho a PiRATEs nodeID 💰', nodeID);

```

a. actions

```js
  actions.createNode({
```

c. contentDigest

```js
      contentDigest: createContentDigest(),
```

t. type

```js
      type: "powTubeOemBed"
```

             i. internal, because it is NOT polite to have `contentDigest` and `type` under `id`

```js
    internal: {
```

o. (POW_TUBE_ID)

```js
POW_TUBE_ID
```

n. node

Go look at our node in GraphiQL

s. Singing

Show drawing of Woolly Goatsby singing


Here is a screenshot of the video I am using the id from and which I will be sourcing some other Sunday
![OlaCast-13- Sid and Giggles-24](https://user-images.githubusercontent.com/7642493/149655407-3a4b7378-faff-479b-ace7-8f5d2df000c9.png)

The POW code on Github:
[https://github.com/olavea/POW/](https://github.com/olavea/POW/)

[Sign up for the newsletter:](https://lillylabs.ck.page/f728bde07b)

The original POW website:
[https://www.usepow.com/](https://www.usepow.com/)

Source:
[https://github.com/olavea/Rubys-TimeShip/issues/8](https://github.com/olavea/Rubys-TimeShip/issues/8)

source [docs/creating-a-source-plugin/](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/creating-a-source-plugin/#create-nodes-inside-of-sourcenodes-with-the-createnode-function)
