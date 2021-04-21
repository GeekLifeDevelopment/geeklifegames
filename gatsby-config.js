module.exports = {
  siteMetadata: {
    title: "geek-life-games-site",
    siteUrl: "http://geeklife.games",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "QMTWqnNmaaExK3mcDRohOmMzlwiRhXZPyXVrr22B6sI",
        spaceId: "4ox3o4tczyx7",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-DYF9KT9H9Q",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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
  ],
};
