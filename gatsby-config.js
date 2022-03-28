module.exports = {
  siteMetadata: {
    title: `POW! — the privacy-first menstrual cycle journal`,
    siteUrl: `https://usepow.app`,
    contact: {
      email: `hello@usepow.app`,
      address: `Tromsøgata 26, 0565 Oslo, Norway`,
    },
    greeting: `Made with ❤ <br/>by <a href="https://twitter.com/raae">@raae</a> and family.`,
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
          // "UGq8cnNTbwI",
          // "Bk1jonYPFD4",
          // "TzJfepDjpzM",
          "eRTJPIa39a4", // Why make POW!
          //  "UGq8cnNTbwI",
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
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `@raae/gatsby-theme-mui`,
    },
  ],
};
