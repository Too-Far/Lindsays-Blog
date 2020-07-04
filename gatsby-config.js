module.exports = {
  siteMetadata: {
    title: `Lindsay Turners personal blog`,
    description: `A place where I can come and ponder, share and interact with all the humans of the world`,
    author: `Lindsay Turner`,
  },
  plugins: [
    "gatsby-plugin-top-layout",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Blog",
        fieldName: "LB",
        url:
          "https://api-us-east-1.graphcms.com/v2/ckbsz1wnj009l01xmeefw43ly/master",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
