---
title: Uploading Cloudinary Images Dev-Rel-Skills week 16 💡
author: "@OlaHolstVea"
date: 2022-04-16
---

### _ _ _ + _ _ _

- In my schemas folder I make a ProductImage.ts file
- I make my `ProductImage`
- It's a `list`
- I `import`my list
- And then inside of that `fields``
- I have my `image`
- And that is `cloudinaryImage({})`
- And inside of that `cloudinary` config
- `label` is going to be 'Source'
- I also want to pass a spot to pass `altText`
- And that is a `text()` field
- I imported `text`
- I imported `cloudinaryImage`
- I imported

```js


export const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text(),
  },
});

```

![React-1]()
![React-1]()