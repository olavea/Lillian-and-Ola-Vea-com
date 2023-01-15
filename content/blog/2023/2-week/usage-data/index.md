---
title: How to Source Useage Data into a Gatsbyjs site? 💡
author: "@OlaHolstVea"
date: 2023-01-12
---

On our Gatsby site we show useage data for our Twitter tool. I will soon tell you how we did it, but first:
-what is useage data and
-why do we show useage data?


## What is useage data? (on our Gatsbyjs website)

On our Gatsby site we show the little heads you can see in the screenshot below. Those little heads are the Twitter avatars of our users. So showing our users is one piece of useage data we show on our Gatsby site.

<screenshot 1>

## Why do we show usage data? (on our Gatsbyjs website)
(Gatsbyjs website)

We show potential users that "this tool will be okay", because Loads of people have already trusted our tool. Showing real usage data is my favorite "social proof", but if you do a google search you'll find other kinds of "social proof".

## How did we Source usage data into our Gatsby site?

I assume you have used Gatsby before, so I'll skip the step of deconstructing `gatsbyUtils` and `actions`. You can find it in the code example below.

The four steps we took to source usage data and show usage data.

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

  const { actions, createNodeId, createContentDigest, reporter } = gatsbyUtils;
  const { createNode } = actions;

  // 1. Get the list of user from Xata ✅

  const xata = getXataClient();

  const records = await xata.db.meta.getAll();

  // 2. Get info about each user from Twitter ✅

  const twitterClient = new Client(process.env.TWITTER_BEARER_TOKEN);

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