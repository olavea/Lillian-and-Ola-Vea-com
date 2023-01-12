---
title: How to Source useage data into a Gatsby site? 💡
author: "@OlaHolstVea"
date: 2023-01-12
---

##

We have a twitter tool, Prune your Follows. We want to show useage data for our tool on our Gatsby site.



## What is useage data?

In our Gatsby site we show three pieces of usage data and one is the little heads you can see in the screenshot below.

<screenshot 1>

## Why we show usage data on our Prune your Follows website

We Show potential users "this tool will be okay", because Loads of people have already trusted Prune your Follows. Those "people" are the little heads you can see in the screenshot. The little heads are avatars from twitter. Showing real usage data is my favorite "social proof".

## How did we Source usage data into our Gatsby site?


```js
  // 1. Get the list of user from Xata ✅
  // 2. Get info about users from Twitter ✅
  // 3. Create a Gatsby Data Node ✅
  // 4. Gatsby Plugin Remote Image ✅

```






```js
const { getXataClient } = require("./xata");
const { Client } = require("twitter-api-sdk");

const createUserAvatarNodes = async (gatsbyUtils) => {

  // 1. Get the list of user from Xata ✅
  // 2. Get info about users from Twitter ✅
  // 3. Create a Gatsby Data Node ✅
  // 4. Gatsby Plugin Remote Image ✅


  const { actions, createNodeId, createContentDigest, reporter } = gatsbyUtils;
  const { createNode } = actions;

  const xata = getXataClient();

  // 1. Get the list of user from Xata ✅

  const records = await xata.db.meta.getAll();

  const twitterClient = new Client(process.env.TWITTER_BEARER_TOKEN);

  // 2. Get info about user from Twitter ✅

  for (const record of records) {
    const { data: account } = await twitterClient.users.findUserById(
      record.id,
      {
        "user.fields": ["profile_image_url"],
      }
    );

  // 3. Create a Gatsby Data Node ✅

    createNode({
      id: createNodeId(account.username),
      avatarUrl: account.profile_image_url,
      username: account.username,
      internal: {
        type: "UserAvatar",
        contentDigest: createContentDigest(account),
      },
    });
  }
};
```



gatsby-config.js
```js

  // 4. Gatsby Plugin Remote Image ✅
module.exports = {
  ....
  plugins: [
    ....
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "UserAvatar",
        imagePath: "avatarUrl",
      },
    },
  ],
};



```

src/domains/marketing/Avatars.js

```js

  // 4. Gatsby Plugin Remote Image ✅
  // # = new code

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
# import { GatsbyImage, getImage } from "gatsby-plugin-image";

export function Avatars({ children }) {
  const data = useStaticQuery(graphql`
    query {
      allUserAvatar {
        nodes {
          username
        #   localImage {
        #     childImageSharp {
        #       gatsbyImageData(width: 32, placeholder: BLURRED)
        #     }
        #   }
        }
      }
    }


      {children}
      <div className="flex justify-center -space-x-1 overflow-hidden">
        {data.allUserAvatar.nodes.map((user) => {
          const image = getImage(user.localImage);
          return (
            # <GatsbyImage
              key={user.username}
              className="inline-block h-8 w-8 rounded-full bg-blue-200 ring-2 ring-white"
            #   image={image}
              alt={user.username}
            />
          );
        })}
      </div>
    </>
  );
}
```