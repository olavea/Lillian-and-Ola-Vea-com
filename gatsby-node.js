// POW!-site/gatsby-node.js
const ID_GiGGLES = `eRTJPIa39a4`;
const axios = require("axios");

async function prepPugNode({actions, createNodeId, createContentDigest}) {
    const { data } = await axios.get("https://www.youtube.com/oembed",
        {params: {
        url: `https://youtu.be/${ID_GiGGLES}`,
        maxwidth: 356
    }});
    actions.createNode({
        ...data,
        id: createNodeId(`pug-${ID_GiGGLES}`),
        internal: {
            contentDigest: createContentDigest(ID_GiGGLES),
            type: `pugNode`
        }
    })
};

exports.sourceNodes = async (params) => {
    await Promise.all([prepPugNode(params)]);
};