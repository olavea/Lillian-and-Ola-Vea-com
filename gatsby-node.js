// POW!-website/gatsby-node.js

//                 Troya Goatsby and Lizabeth Catsby are
//                 Baking pages
//                 with Cap'n Granny Sharksby's
//                 createPages hook
async function bakeMarkdownNodesIntoGoodies({ graphql, actions }) {
  // console.log("Captain Granny Sharksbys createPages hook💀");
  //              1. bakingSong = Troya Goatsby and Lizabeth Catsby sings
  //                 the bakingSong by Cap'n Granny Sharksby 🦢
  const bakingSong = require.resolve("./src/templates/bakingSong.js");
  //              2. supplies: allMarkdownRemark
  const { data } = await graphql(`
    {
      supplies: allMarkdownRemark {
        nodes {
          id
        }
      }
    }
  `);
  //             3. Loop over the nodes and for each create a page
  data.supplies.nodes.forEach((ahoyGoodie) => {
    //                  console.log('🎩', ahoyGoodie.id);
    // // //              A. – B. – C. – (minus DSG 🎩)
    actions.createPage({
      // //              A. «Ahoy! Goodie?!»
      // //                 Cap'n Foxby shouts and embarks. 🦊
      path: `/md/${ahoyGoodie.id}`,
      // //              B. Troya Goatsby sings badly
      // //                 and bakes baby sharks. 🦈
      component: bakingSong,
      // //              C. Catsby looks tasty
      // //                 Foxby gets hungry for kitten. 🐯
      context: {
        catsby: ahoyGoodie.id,
        fox: "Catsby looks tasty I getz hungry for kitten",
      },
      // // //              D. Don't Show Goodies to Foxby
      // // //              and maybe get bitten.
      // // //              catsby build and look for _ _ _ in terminal 💀
      // //         defer: index + 1 > 2,
      // // //              D. Data tree 🤖🌲
      // // //              E. Every node you must sort 💰
      // // //              F. Fields Forever `fields: ,` 🍓
      // // //              E. forEach index
      // // //              R. RRR! defer: index + 1 > 2 🎩
    });
  });
}
exports.createPages = async (params) => {
  // create pages dynamically from any data source like for example see below:
  // wait for all promises to be resolved before finishing this function
  await Promise.all([bakeMarkdownNodesIntoGoodies(params)]);
};
