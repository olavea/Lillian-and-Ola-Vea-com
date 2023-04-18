---
title:  Dev-Rel-Skills week 16 💡
author: "@OlaHolstVea"
date: 2022-04-16
---

## Two way data relationships in keystone

Day 18 #100daysofreact

![Two-way-data-relationships](https://pbs.twimg.com/media/Ft-1RcPXoAUaN5A?format=jpg&name=large)

```js

// BACKEND / schemas / Product.ts

import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';

export const Product = list({
  // TODO access
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    photo: relationship({
      ref: 'ProductImage.product',
    }),
  },
});

// BACKEND / schemas / ProductImage.ts

import { relationship, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { cloudinaryImage } from '@keystone-next/cloudinary';
import 'dotenv/config';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
  folder: 'bleh',
};

export const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    altText: text(),
    product: relationship({
      ref: 'Product.photo',
    }),
  },
});


```


```js



```

Day 17 #100daysofreact

I created a Two way relationships in keystone

![React-1](./two-way-rel.png)

![React-1](./IMG_E9373.JPG)


## Uploading Cloudinary Images

Day 16 #100daysofreact

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