```js

//                 Troya Catsby and Lilly Owlsby Baking pages
//                 with Cap'n Granny Sharksby's
//                 createPages hook
async function bakeToolsIntoPages({actions, graphql}) {
  //              1. bakingSong = Lance-Lotta sings like a 🦢
  //                 console.log('Captain Granny Sharksbys createPages hook');
  const bakingSong = require.resolve(`./src/pages/pizzas.js`)
  //              2. supplies: toppings data 🌲 in Sanity and _ _ _ drawn
  //                 Look for _ _ _ in http://localhost:8000/topping/Duct-Tape 👻
  const { data } = await graphql(`
  `)
  //              3. Loop over the tools nodes and
  //                 for each create a page with the createPage method
  console.log("💀💀", data.supplies.nodes);
  data.supplies.nodes.forEach((ahoyGoodie, index) => {
    //                 console.log('Defer index:', index);
    ({
      //              A. «Ahoy Goodie?!»
      path: `/tool/${ahoyGoodie.name}`,
      //              B. Sing
      component: bakingSong,
      //              C. «Catsby looks goodie
      //                 I getz hungry for kitten.»             // reggae 🎵
      context: {
        catsby: ahoyGoodie.name,
        coolToolRegex: `/${ahoyGoodie.name}/i`
      }
      //              D. Don't Show Goodies to Fox
      //              and maybe get bitten. 🎩
        defer: index + 1 > 14,
      //              How does Catsby help Lilly make an index of all the toppings?
      //              What is the way Lilly makes index travel from start to defer?
      //              D. 🤖 Data tree in your GraphiQL garden
      //              E. 🎩 Every node you sort
      //              F. is for Fields, 🍓 `fields: ....,`
      //              E. is for Each, forEach .... index
      //              R. Rrr! defer: index + 1 > 3
      //              props.pageContext.defer:
      //              props.pageContext.ownerNodeId on Sunday

//      ownerNodeId: ahoyGoodie.id,
    });
  });
  //              5. Pass tag data to pizzaTags.js
}
```