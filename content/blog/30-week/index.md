---
title: A New Gatsby Cloudinary plugin, but backwards compatible
author: "@OlaHolstVea"
date: 2022-07-31
---


```js

exports.createRemoteImageNode = async ({
  // ....
  createNodeField,
  // ....
}) => {
  // ....
  if (!relationshipName) {
    reporter.panic(
      "`relationshipName` is a required argument. This parameter sets the name of the relationship between the parent node and the newly created node for this image in Gatsby's GraphQL layer."
    );
  }
// ....

  const imageNode = createImageNode({
    cloudinaryUploadResult,
    parentNode,
    createContentDigest,
    createNodeId,
  });

  // Add the new node to Gatsby’s data layer.
  createNode(imageNode, { name: 'gatsby-transformer-cloudinary' });
  // Tell Gatsby to add `${relationshipName}` to the parent node. The new way.
  let relationshipKey = `${relationshipName}`;

  createNodeField({
    node: parentNode,
    name: relationshipKey,
    value: imageNode.id,
  })

  // Tell Gatsby to add `${relationshipName}` to the parent node. The old way.
  relationshipKey = `${relationshipName}___NODE`;
  parentNode[relationshipKey] = imageNode.id;
  return imageNode;
};


```

```js

var favFood = `meat`;

var favDrink = `coffee`;

let numberOfCups = 4;

console.log(favDrink);

// 1.
let changeMe = true;

// 2.
changeMe = false;

console.log(changeMe);

// 1.
const entree = `enc`;

// 2.


// 3.


```

```js

// 1. Declare variable named favFood and assign to it the string `meat`


// 2. Declare a variable named favDrink and assign to it the number 4


// 3.


// 1. Declare variable named changeMe and set it equal to the boolean true.


// 2. set the value of changeMe to the boolean false.


console.log(changeMe);

// 1. Declare a constant variable named entree and assign to it the string `Meat`


// 2. log to the console


// 3. Paste: entree = `Nothing Burger`;

// Hint. Paste: const nothingBurger;


```

```js

// 🐶 Years

// 1.
let myAge = 43;

// 2.
let earlyYears = 2;

// 3.


// 4.


// 5.


// 6.




// 7.


// 8.


// 9.




// 10.


// 11.




```


```js

// Con
// 1.
let sale = true;

sale = false;

// 2.
if (sale === true) {
    console.log(`buy`)
}

// 3.



// 4.




```





```js
// 1.


// 2.


// 3.



// 4.


// 5.


// 6.







// 7.


// 8.


// 9.




// 10.


// 11.


// 12.







```



