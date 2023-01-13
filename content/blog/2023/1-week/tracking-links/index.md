---
title: trackPageview  useFathom 💡
author: "@OlaHolstVea"
date: 2023-01-01
---

##


```js

import { useFathom } from "@raae/gatsby-plugin-fathom";

export function Footer() {
  const { trackPageview } = useFathom();

    return (
        <a
            onClick={() => trackPageview({
                url: : "https://queen.raae.codes/",
                referrer: "https://pruneyourfollows.com/footer",
            })}
        />
}
```