module.exports = {
  siteMetadata: {
    title: `Use POW!`,
    siteUrl: `https://www.yourdomain.tld`,
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
    "gatsby-transformer-remark",
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
      resolve: "local-source-youtube",
      options: {
        youTubeIdRedStringTreasure: [
          "UGq8cnNTbwI",
          "Bk1jonYPFD4",
          "TzJfepDjpzM",
          "eRTJPIa39a4",
          "UGq8cnNTbwI",
        ],
      },
    },
  ],
};
