require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const deployUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "http://localhost:9000";

module.exports = {
  siteMetadata: {
    name: "Lillian and Ola Vea .com",
    url: "https://olavea.gtsb.io/",
    canonicalUrl: "https://olavea.gtsb.io/",
    twitterCreator: "@olaholstvea",
    twitterSite: "",
    siteDescription: `We show Gatsby devs how to get the most out of Learning By Doing through consulting, rum-fueled treasure hunts in the sharky waters around the Gatsby islands and more!`,
    siteLang: `en`,
    contact: {
      email: `ola@olavea.com`,
      address: `Tromsøgata 26, 0565 Oslo, Norway`,
    },
    greeting: `Made with ❤ <br/>by <a href="https://twitter.com/olaholstvea">@olaholstvea</a> and family.`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "@raae/gatsby-source-youtube-oembed",
      options: {
        youTubeIds: [
          "eRTJPIa39a4", // Why make POW!
          "Bk1jonYPFD4", // Celebrating POW!
          "TzJfepDjpzM", // POW! Focus Friday
          "nS36D2zUkvA", // JSConf Budapest
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
      __key: "content",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 500,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `@raae/gatsby-theme-mui`,
    },

    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
        context: true,
        maxResults: 10,
        prefix: "demo/animals",
        // 10:58 in https://youtu.be/IicwkJCNy7k?t=658
        // type: `type Value`,
        // prefix: `abc-xyz/`,
      },
    },
    {
      resolve: `gatsby-transformer-cloudinary`,
      options: {
        transformTypes: ["CloudinaryMedia"],
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
      },
    },
  ],
};
