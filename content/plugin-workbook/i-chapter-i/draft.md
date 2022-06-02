## GATSBY IMAGE CDN 🧚‍♀️

Taskerbell-task: 🧚‍♀️

- **WHAT**: IMAGE CDN upgrade on 👑 Queen @raae's gatsby-demo-web-scraping
- **WHY**: faster builds and faster develop time so our user can escape the Croco-Clock
- **HOW**: is 8 sub-tasks in 3 parts

## How: part 1 of 3

- [ ]  I. Inside. Inside! I must climb inside! 🏠

- [ ]  M. Must I `add....face(` to Tobbie? 🃏


![g2](./g2.jpg)


In the middle of a wildly windy night Ruby hears a crash on her rooftop. She climbs up and sees a weird ....ship thing with two weird windows. One yellow window and one light blue window, broken glass. Dark darkness inside.


## I. «Inside. Inside! I must climb inside, but into which window?» Says Ruby to the Lizabeth.

### Inside which `exports....` window should Ruby climb?


🪟 + 💜
```js
exports.sourceNodes = ( gatsbyUtils ) => {
```

or
🪟 + 💙 + 🕳️ + 💔

```js
exports.createSchemaCustomization = ({ actions, schema }) => {
```

I guess you'll follow your reckless ❤️ into the dangerously broken window. Says Lizabeth.



## Inside Ruby finds a baby-kraken 🦑 who looks murdered, or maybe .... fixable?

In what order will Tobbie's broken hearted code work again?

### In what order will the code work again?

```js
interfaces: [`Node`, `RemoteFile`],
```

```js
name: `....TobbieThumbnail`,
fields: {
  // 🍓
},
```

```js
schema
```

```js
.buildObjectType({
```
«»
«Aha! A murderess and a sourceress! Chaught red handed doing their wicked work in the deep dark night. I'll report you both to Queen Mary herself, she has been suspecting you two of treasonous treachery for years. This looks like just the kind of thing I have been spying on you to reveal. See you loosers later on the inside of a Tower prison cell. Where you both belong. Mo-ha-ha-ha!» Simona "" Renard departs.

«Hurry, we must find the real kraken-killer to win our freedom. Says Lizabeth

## M. Must I `add....face(` to Tobbie? 🃏

### Must I `add....face(` to Tobbie?

«No, This is not a plugin.»

«What's a plugin?»

### You've helped Ruby do these 2 sub-tasks:


- [ ]  I. Inside Tobbie's ship 🏠

- [ ]  M. Must I `add....face(` to Tobbie? 🃏



## You DID Great! 1/3 of the treasure hunt 💪 😺 🏴‍☠️


### Next up:

Because Fix the ship's nodes

- [ ]  A. Add another window `exports....`?

- [ ]  G. is for GraphiQL where we find 🍓 fields

- [ ]  O. is for onCreateDev....? 🃏

##  A. Add another window `exports....`?

Ruby climbs out onto the rooftop again, now what window?


### Add another window and name it `exports....`?


🪟 +
```js
exports.sourceNodes = async (gatsbyUtils) => {


}
```

or

🪟 +
```js
exports.onCreateNode = (gatsbyUtils) => {
  const { actions, node, createNodeId } = gatsbyUtils;

```

or

🪟 +
```js
exports.createSchemaCustomization = (gatsbyUtils) => {
  const { actions, node, createNodeId } = gatsbyUtils;


}
```




### Deconstruct `actions` to `create....` Tobbie's ....?

```js

const { createNode, createType } = actions;
createType(

)

```

or


```js
const { createNode, createType } = actions;
createNode(

)
```










## G. is for GraphiQL where we find 🍓 fields

Here is a piece of code, but half of it is missing

### Copy and paste inside `create....(`

```js
{
    height: 630,
    url: "node.coverSrc",
    mimeType: "image/jpeg",
    parent: "node.id",

    width: 1200,
    id: "an id",
    filename: "node.id" + ".jpg",
    internal: {
      type: "prefixAsset",
      contentDigest: "node.internal.contentDigest",
    },

    crowdcastId: "node.id",
}
```

## G. Go into GraphiQL 🍓 fields and find a 🍓 for each of the h.u.m.p.-w.i.f.i.-c. fields



![🍓 II computer](./.jpg)
![](./.jpg)


- [ ] h.
- [ ] u. 💰 node.coverSrc or node.url or node.rawScrape.path
- [ ] m. "image/jpeg" or node.internal.mediaType or node.internal.type
- [ ] p.  node.id or node.parent

- [ ] w.
- [ ] i. createNodeId(node.coverSrc) or createNodeId(node.url) or
- [ ] f.  node.id + ".png" or node.title + ".png"
- [ ] i.       internal: {
        type: "CrowdcastTobbieThumbnail"  or node.internal.type
        contentDigest: node.internal.contentDigest or node.internal.content
      },
 or  or

- [ ] c. node.url or node.title


## O. OK add another window this we must code ourselves first is for onCreateDev....? 🃏



### O. is for onCreateDev....? 🃏


How many windows does one ship need? Says Ruby

since we are 1554 we need a backwards compatible plugin to get ...(?)

I say no to this, it's still not a plugin



### You've done these 3 sub-tasks:



- [ ]  A. Another

- [ ]  G. is for GraphiQL where we find 🍓 fields

- [ ]  O. is for onCreateDev....? 🃏



## You DID it! 2/3 of the treasure hunt 💪 😺 🏴‍☠️

### Next up:

- [ ]  C. createNodeId( 🦑

- [ ]  D. blind date for Tobbie  😎 🍸

- [ ]  N. Now you can add Gatsby Image! 🖼️

![](./.jpg)



### C. createNodeId(

### C. copy :

```js
  const TobbieThumbnailNodeId = createNodeId(
    `${YOUTUBE_THUMBNAIL_TYPE} >>> ${....}`
  );
```

### C.  ${....}`

```js

```

or

```js

```

### D. blind Date for Tobbie 😎 🍸
How can we tell the ... to go on a blind date with the CrowdcastThumbnail node?


### D. Copy:


```js
const createCrowdcastTypes = (gatsbyUtils) => {
  const { actions, schema } = gatsbyUtils;

  actions.createTypes([
    `
    type YouTube implements Node {
      thumbnail: YouTubeThumbnail @link(
        from: "...."
        by: "...."
      )
    }
  `,
```


### D.  from: "...." by: "...."

```js

```

or

```js

```

### N. is for Now you can add Gatsby Image 🖼️
And maybe see a drawing of the real kraken-killer

## Copy into terminal 💀

```shell
yarn add gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp
```

## Add the plugins to your gatsby-config.js:

```js
// gatsby-config.js
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
```

«Who is this?»

«Doesn't look like a cold blooded kraken-killer to me. What do you think?»

«No...»

«What' that smokey smell?»

«Somebody burned their .... midnight snack in the stove?»

«Look down! It's OUR house burning!»

«Jingle the fire bells! befor the whole bridge burns!»

«Jingle bells

Batman smells

Ruby laid an egg

Batmobile lost it's wheel

joker got away, hey!»
«»
«»
## Follow Docs:

[https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/](https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/)



- [ ]  C. createNodeId( 🦑

- [ ]  D. blind date for Tobbie and Alice 😎 🍸

- [ ]  N. Now you can add Gatsby Image 🖼️


## You DID it! The whole treasure hunt 💪 😺 🏴‍☠️




- G. GraphQL type Tobbie 🦑

- I. I. Inside Tobbie's home 🏠

- M. Must I `add....face(` to Tobbie? 🃏



- A. Alice's assetNode 🐴

- G. is for GraphiQL where we find 🍓 fields

- O. is for onCreateDev....? 🃏



- C. createNodeId( 🦑

- D. blind date for Tobbie and Alice 😎 🍸

- N. Now you can Gatsby Image 🖼️





stop

### Alice our new uniDonkey is a `const ....`

```js
const uniAssNode = {    height: 630 , width: 1200, }
const assetNode = {    height: 630 , width: 1200, }
const assetType = {    height: 630 , width: 1200, }
const aliceNode = {    height: 630 , width: 1200, }
```

### Alice uniDonkey goes inside which `const ....`?

```js
const createCrowdcastNode = async (gatsbyUtils, pluginOptions, youTubeId) => {
const scrapeCrowdcast = async () => {
const createCrowdcastThumbnailNode = (gatsbyUtils) => {
const createCrowdcastTypes = (gatsbyUtils) => {
```



### Alice uniDonkey should be called inside which `exports....`?

```js
exports.pluginOptionsSchema = ({ Joi }) => {
exports.createSchemaCustomization = (gatsbyUtils) => {
exports.sourceNodes = async (gatsbyUtils, pluginOptions) => {
exports.onCreateNode = (gatsbyUtils) => {
```


### Alice uniDonkey is created with `actions.create....`?

```js
actions.createAssetNode(
actions.createNode(
actions.createNodeField(
actions.createTypes(
```

![](./.jpg)





### G. is for GrapiQL where we find 🍓 fields


```js
{
    height: 630,
    url: allCrowdcastWebinar.node.url,
    mimeType: "image/jpeg",
    parent: node.id,

    width: 1200,
    id: youTubeThumbnailNodeId,
    filename: node.youTubeId + ".jpg",
    internal: {
      type: YOUTUBE_THUMBNAIL_TYPE,
      contentDigest: node.internal.contentDigest,
    },

    youTubeId: node.youTubeId,
}
```

### O. is for onCreateDev....?

```js
exports.onCreateDevServer = ({ app }) => {};
exports.onCreateDev = ({ app }) => {};
exports.onCreateDev = ({ app }) => {};
exports.onCreateDev = ({ app }) => {};

```


### Inside goes which `........ImageServiceDevRoutes(app);`?

```js
filePlayImageServiceDevRoutes(app);
filePolyImageServiceDevRoutes(app);
filePollyImageServiceDevRoutes(app);
polyfillImageServiceDevRoutes(app);

```




### C. is for createNodeId(

### C. is for copy this:

```js
  const youTubeThumbnailNodeId = createNodeId(
    `${YOUTUBE_THUMBNAIL_TYPE} >>> ${....}`
  );
```

### C.  ${....}`

```js
node.youTubeId
node.oEmbed.id
youTubeThumbnailNodeId,
node.id
```


### D. is for Dating
How can we tell the Crowdcast node it is going on a blind date with the CrowdcastThumbnail node?


### D. Copy:


```js
const createYouTubeTypes = (gatsbyUtils) => {
  const { actions, schema } = gatsbyUtils;

  actions.createTypes([
    `
    type YouTube implements Node {
      thumbnail: YouTubeThumbnail @link(
        from: "...."
        by: "...."
      )
    }
  `,
```


### D.  from: "...." by: "...."


```js
@link(
    from: "youTube"
    by: "youTube"
)
```

```js
@link(
    from: "youTubeId"
    by: "youTubeId"
)
```

```js
@link(
    from: "youTube"
    by: "youTubeId"
)
```

```js
@link(
    from: "youTubeId"
    by: "youTube")
)
```

or

```js
"youTubeId"
"youTubeThumbnailNodeId"
"youTubeNodeId"
"youTubeIds"

```



**Yo-HOW! Yo-HOW! A pirate’s life for you!**

Your first sub-task:

## G. A new GraphQL _ _ _ _ _ _ type

Guess. Guess. Guess. And guess.


Ola Vea is a Gatsby-plugin-Dev who also helps Gatsby-Devs waste less time on unsticky dev-learning. Dev at POW! — the private menstrual cycle journal (usepow.app) 👑 @raae You can reach him at: ola@lillylabs

twiter

Ola Vea😺🏴‍☠️ is writing a Gatsby-plugin workbook


A Gatsby-plugin-Dev who also helps Gatsby-Devs waste less time on unsticky dev-learning. Dev at POW! — the private menstrual cycle journal (usepow.app) 👑 @raae


https://olavea.gatsbyjs.io/plugin-workbook/


`FULL_NAME` is a `DISCIPLINE` who helps `TARGET_MARKET` with `EXPENSIVE_PROBLEM`. You can reach `HIM/HER` at: `EMAIL_ADDRESS`




a Gatsby-plugin-Dev and consultant who helps Gatsby-Developers stop wasting time on unsticky dev-learning.

A Gatsby-plugin-Dev who also helps Gatsby-Devs waste less time on unsticky dev-learning.

On a mission to rid the Jamstack of Half-Ass-Structured Skill-Builder-Sessions.
@GatsbyJS
-dev at POW! — the private menstrual cycle journal (http://usepow.app) 👑
@raae

[https://ia601302.us.archive.org/18/items/suppliantmaidens_1512_librivox/suppliants_01_aeschylus_64kb.mp3](https://ia601302.us.archive.org/18/items/suppliantmaidens_1512_librivox/suppliants_01_aeschylus_64kb.mp3)

draft:

Ass 1.





### Guess the `const ....` of our new uniDonkey, Alice

```js
const uniAssNode =
const assetNode =
const assetType =
const aliceNode =

```

![](./.jpg)



```js
{
    height: node.oEmbed.thumbnail_height,
    url: node.oEmbed.thumbnail_url,
    mimeType: "image/jpeg",
    parent: node.id,

    width: node.oEmbed.thumbnail_width,
    id: youTubeThumbnailNodeId,
    filename: node.youTubeId + ".jpg",
    internal: {
      type: YOUTUBE_THUMBNAIL_TYPE,
      contentDigest: node.internal.contentDigest,
    },

    youTubeId: node.youTubeId,
}
```


Actions 2.

### Guess the `actions....` to `create....` Alice

```js
actions.createUniAssNode(
actions.createNode(
actions.createNodeField(
actions.createTypes(
```

![](./.jpg)

Ass 3.

### Inside which `const ....` do you put Alice uniDonkey's `create....`?

```js
const createYouTubeNode = async (gatsbyUtils, pluginOptions, youTubeId) => {
const fetchEmbed = async (id) => {
const createYouTubeThumbnailNode = (gatsbyUtils) => {
const createYouTubeTypes = (gatsbyUtils) => {
```

Ass 4.

### Inside which `exports....` do you call uniDonkey Alice ?

```js
exports.pluginOptionsSchema = ({ Joi }) => {
exports.createSchemaCustomization = (gatsbyUtils) => {
exports.sourceNodes = async (gatsbyUtils, pluginOptions) => {
exports.onCreateNode = (gatsbyUtils) => {
```

Stop

GrapiQL H.
### Guess the `height: node....` to add to our 🍓 fields

```js
node.thumbnail.height,
node.oEmbed.height,
node.oEmbed.thumbnail_height,
node.oEmbed.html,
```

GrapiQL U.

### Guess the `url: node....` to add to our 🍓 fields

```js
node.thumbnail.publicUrl,,
node.oEmbed.thumbnail_url,
node.oEmbed.url,
node.oEmbed.provider_url
```

GrapiQL M.


### Guess the `mimeType: node....` to add to our 🍓 fields

```js
node.file.contentType,
"image/jpeg",
node.thumbnail.mimeType;
node.thumbnail.internal.mediaType;
```


GrapiQL P.


### Guess the `parent: node....` to add to our 🍓 fields

```js
node.oEmbed.id,
node.thumbnail.id,
node.parent,
node.id,
```

GrapiQL W.


### Guess the `width: node....` to add to our 🍓 fields

```js
node.oEmbed.thumbnail_width,
node.oEmbed.width,
node.thumbnail.width,
node.thumbnail.resize.width,
```

GrapiQL I. internal



### Guess the `contentDigest: node....` to add to our 🍓 fields

```js
node.thumbnail.internal.contentDigest,
node.internal.contentDigest,
node.internal.content,
node.thumbnail.internal.content,
```

GrapiQL F.


### Guess the `filename: node....` to add to our 🍓 fields

```js
node.id + ".jpg",
node.youTubeId + ".jpg",
node.oEmbed.id + ".jpg",
node.oEmbed.author_name + ".jpg",
```

GrapiQL I.


### Guess the `id: node....` to add to our 🍓 fields

```js
node.youTubeId
node.oEmbed.id
youTubeThumbnailNodeId,
node.id
```


O
onCreateDevServer



### Must I `........ImageServiceDevRoutes,` to ....?

```js
filePlayImageServiceDevRoutes,
filePolyImageServiceDevRoutes,
filePollyImageServiceDevRoutes,
polyfillImageServiceDevRoutes,

```

### Must we require ….

```js
"gatsby-plugin-tools/polyfill-remote-file"
"gatsby-plugin-utils/polyfill-remote-file"
"gatsby-utils/polyfill-remote-file"
"gatsby-plugin-timeship/polyfill-remote-file"
```



C
createNodeId(

```js
node.youTubeId
node.oEmbed.id
youTubeThumbnailNodeId,
node.id
```


```js
  const youTubeThumbnailNodeId = createNodeId(
    `${YOUTUBE_THUMBNAIL_TYPE} >>> ${node.youTubeId}`
  );
```


D
Dating how can we get the Crowdcast node to start dating the CrowdcastThumbnail node?

```js
@link(
    from: "youTube"
    by: "youTube")
)
```

```js
@link(
    from: "youTubeId"
    by: "youTubeId")
)
```

```js
@link(
    from: "youTube"
    by: "youTubeId")
)
```

```js
@link(
    from: "youTubeId"
    by: "youTube")
)
```

looky


```js
const createYouTubeTypes = (gatsbyUtils) => {
  const { actions, schema } = gatsbyUtils;

  actions.createTypes([
    `
    type YouTube implements Node {
      thumbnail: YouTubeThumbnail @link(....)
    }
  `,
```

or

```js
"youTubeId"
"youTubeThumbnailNodeId"
"youTubeNodeId"
"youTubeIds"

```

