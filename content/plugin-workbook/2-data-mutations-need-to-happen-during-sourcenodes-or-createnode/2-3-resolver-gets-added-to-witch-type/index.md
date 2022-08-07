---
title: Your resolver gets added to witch type? not-Old- Gatsby-Way
author: "@OlaHolstVea"
date: 2022-08-06
---
(Draft, you know, build in public and such....)

### Your resolver gets added to witch type?

### Answer
 type: `File`,

```js

// plugins / gatsby-source-cms / gatsby-image-resolver.js
// line: 26 - 31
    createResolvers({
      CmsLocalMedia: {
        local: {
          type: `File`,

          async resolve(source, _args, _context, _info) {


```


### Your resolver gets added to type: `File`, is it the same type as in createNode?

### Answer
Maybe.... `'file' or 'LocalMedia'`

For `'file'` see line 24

For `'LocalMedia'` see line 38


```js

// plugins / gatsby-source-cms / utils.js
// line: 20-39
const createMediaNode = (metadata, metafield, {
  createContentDigest,
  createNode
}) => {
    // For  'file' see line 24 below
  if (metafield.type == 'file' && metafield.url && metafield.url.startsWith('https://cdn.cms.com') && isImage(metafield.url)) {
    const {
      value,
      url,
      imgix_url,
      key
    } = metafield;
    const id = md5(metafield.value);
    let media = {
      _id: id,
      value,
      url,
      imgix_url
    };
    const node = processObject('LocalMedia', media, createContentDigest); // For 'LocalMedia' see line 38
    createNode(node);


```
```js

// plugins / gatsby-source-cms / gatsby-
// line:

```
```js

// plugins / gatsby-source-cms / gatsby-
// line:

```
```js

// plugins / gatsby-source-cms / gatsby-

```
```js

// plugins / gatsby-source-cms / gatsby-

```
```js

// plugins / gatsby-source-cms / gatsby-

```
```js

// plugins / gatsby-source-cms / gatsby-

```
```js

// plugins / gatsby-source-cms / gatsby-

```
