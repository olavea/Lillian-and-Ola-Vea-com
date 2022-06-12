const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const createCloudinaryNodes = async (gatsbyUtils, { limit }) => {
  const { actions, reporter, createNodeId, createContentDigest } = gatsbyUtils;
  const { createNode } = actions;

  let nextCursor = null;

  do {
    const result = await cloudinary.api.resources({
      resource_type: "image",
      max_results: limit < 10 ? limit : 10,
      next_cursor: nextCursor,
    });

    reporter.info(
      `Fetched Cloudinary Assets >>> ${result.resources.length} from ${nextCursor}`
    );

    result.resources.forEach((resource) => {
      reporter.info(`Create CloudinaryAsset >>> ${resource.public_id}`);
      createNode({
        id: createNodeId(resource.public_id),
        ...resource,
        internal: {
          type: "CloudinaryAsset",
          content: JSON.stringify(resource),
          contentDigest: createContentDigest(resource),
        },
      });
    });

    nextCursor = result.next_cursor;
    limit = limit - 10;
  } while (nextCursor && limit > 0);
};

exports.sourceNodes = async (gatsbyUtils) => {
  const { reporter } = gatsbyUtils;

  reporter.info("Sourcing nodes - START");
  await createCloudinaryNodes(gatsbyUtils, { limit: 27 });
  reporter.info("Sourcing nodes - DONE");
};
