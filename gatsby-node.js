// gatsby-node.js
const ID_GiGGLES = `UGq8cnNTbwI`;

async function prepPugNode({actions, createNodeId, createContentDigest}) {
actions.createNode({
    id: createNodeId(`pug-${ID_GiGGLES}`),
    internal: {
        contentDigest: createContentDigest(ID_GiGGLES),
        type: `pugNode`
    }
})
    console.log('⛵💀 Yo-Ho Yo-Ho a PiRATEs-pugNode for me 💰');
};

exports.sourceNodes = async (params) => {
    prepPugNode(params);
};