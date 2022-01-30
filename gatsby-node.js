// POW!-website/gatsby-node.js
const ID_GiGGLES = `Bk1jonYPFD4`;
//youTubeIds: ["Bk1jonYPFD4", "TzJfepDjpzM"],
const axios = require("axios");

async function prepPugNode({ actions, createNodeId, createContentDigest }) {
  const { data } = await axios.get("https://www.youtube.com/oembed", {
    params: {
      url: `https://youtu.be/${ID_GiGGLES}`,
      maxwidth: 356,
    },
  });
  actions.createNode({
    ...data,
    id: createNodeId(`pug-${ID_GiGGLES}`),
    internal: {
      contentDigest: createContentDigest(ID_GiGGLES),
      type: `pugNode`,
    },
  });
}

exports.sourceNodes = async (params) => {
  await Promise.all([prepPugNode(params)]);
};

const prepNode = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  // //              G. Get embedData later with local plugin
  // //              I. I prep a Ginger node
  createNode({
    id: createNodeId(`pug-node-${ID_GiGGLES}`),
    internal: {
      type: `gingerNode`,
      contentDigest: createContentDigest(ID_GiGGLES),
    },
  });
};

//                 Troya Catsby and Lizabeth Catsby are
//                 Baking pages
//                 with Cap'n Granny Sharksby's
//                 createPages hook
async function bakeGingerNodesIntoGoodies({ graphql, actions }) {
  console.log("Captain Granny Sharksbys createPages hook💀");
  //              1. bakingSong = Troya Catsby and Lizabeth Catsby sing
  //                 the bakingSong by Cap'n Granny Sharksby 🦢
  const bakingSong = require.resolve("./src/templates/bakingSong.js");
  //                 Look for _ _ _ in http://localhost:8000/topping/Duct-Tape 👻
  //              2. supplies: data
  const { data } = await graphql(`
    {
      supplies: allYouTube {
        nodes {
          id
        }
      }
    }
  `);
  //             3. Loop over the nodes and for each create a page
  // //                 turn them into pages with createPage
  data.supplies.nodes.forEach((ahoyGoodie) => {
    //                  console.log('🎩', ahoyGoodie.id);
    // // //              A. – B. – C. – DSG 🎩
    actions.createPage({
      // //              A. «Ahoy! Goodie?!»
      // //                 Cap'n Fox shouts and embarks. 🦊
      path: `/local-source-youtube-test/${ahoyGoodie.id}`,
      // //              B. Catsby sister sings badly
      // //                 and bakes baby sharks. 🦈
      component: bakingSong,
      // //              C. Catsby sisters looks tasty
      // //                 Fox gets hungry for kitten. 🐯
      context: {
        catsby: ahoyGoodie.id,
        fox: "Catsby looks tasty I getz hungry for kitten",
      },
      // // //              D. Don't Show Goodies to Fox
      // // //              and maybe get bitten. DSG–🎩
      // // //              catsby build and look for _ _ _ in terminal 💀
      // //         defer: index + 1 > 2,
      // // //              D. Data tree 🤖🌲
      // // //              E. Every node you must sort 💰
      // // //              F. Fields Forever `fields: ,` 🍓
      // // //              E. forEach index
      // // //              R. RRR! defer: index + 1 > 2 🎩

      // // //              How does Catsby help Lilly make an index of all the toppings?
      // // //              What is the way Lilly makes index travel from
      // // //              D. Data tree 🤖🌲
      // // //              R. RRR! defer: index + 1 > 2 🎩
    });
  });
}
exports.createPages = async (params) => {
  // create pages dynamically from any data source like for example see below:
  // wait for all promises to be resolved before finishing this function
  await Promise.all([bakeGingerNodesIntoGoodies(params)]);
};
exports.sourceNodes = async (params) => {
  await Promise.all([prepNode(params)]);
};
