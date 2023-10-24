---
title: Stop Your Event From Bubbling up in JavaScript
author: "@OlaHolstVea"
date: 2023-09-25
---

# Stop Your Event From Bubbling up in JavaScript


```js
even.stopPropagation



```




```js

const buyButtons = document.querySelectorAll('button.buy')

function handleBuyButtonClick(event) {
    const button = event.target;
    //  Stop Event From Bubbling up
    event.stopPropagation;
}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick)
})

```











































```js

const buyButtons = document.querySelectorAll('button.buy')

function handleBuyButtonClick() {
    const button = event.target
        //  Stop Event From Bubbling up
    event.stopPropagtion
}


```