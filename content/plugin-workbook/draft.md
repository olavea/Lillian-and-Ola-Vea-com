[https://ia601302.us.archive.org/18/items/suppliantmaidens_1512_librivox/suppliants_01_aeschylus_64kb.mp3](https://ia601302.us.archive.org/18/items/suppliantmaidens_1512_librivox/suppliants_01_aeschylus_64kb.mp3)

draft:

Ass 1.


### Guess the `const ....` of our new uniDonkey

```js
const uniAssNode
const assetNode
const assetType
const aeSchyLus

```

![](./.jpg)

Ass 2.

### Guess the `actions....` to `create....` uniDonkey

```js
actions.createUniAssNode(
actions.createNode(
actions.createNodeField(
actions.createTypes(
```

![](./.jpg)

Ass 3.

### Inside which `const ....` do you put uniDonkey's `create....`?

```js
const createYouTubeNode = async (gatsbyUtils, pluginOptions, youTubeId) => {
const fetchEmbed = async (id) => {
const createYouTubeThumbnailNode = (gatsbyUtils) => {
const createYouTubeTypes = (gatsbyUtils) => {
```

Ass 4.

### Inside which `exports....` do you call uniDonkey?

```js
exports.pluginOptionsSchema = ({ Joi }) => {
exports.createSchemaCustomization = (gatsbyUtils) => {
exports.sourceNodes = async (gatsbyUtils, pluginOptions) => {
exports.onCreateNode = (gatsbyUtils) => {
```

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

GrapiQL I.



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
Dating YouTubeThumbnail
```js
@link(
    from: "youTubeId"
    by: "youTubeId")

```

```js
"youTubeId"
"youTubeThumbnailNodeId"
"youTubeNodeId"
"youTubeIds"

```

```js
  actions.createTypes([
    `
    type YouTube implements Node {
      thumbnail: YouTubeThumbnail @link(from: "youTubeId" by: "youTubeId")
    }
  `,


```