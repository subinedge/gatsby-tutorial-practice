/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title:"Gatsby tutorial practice",
    description:"gatsby tutorial practice with graphQL for query and headless cms for data source",
    author:"Subin Sudhakaran"
  },
  plugins:['gatsby-plugin-sass',
      {
    resolve:'gatsby-source-filesystem',
    options:{
      name:'images',
      path:`${__dirname}/src/images`
    }
  },
  `gatsby-transformer-sharp`, 
  `gatsby-plugin-sharp`
  ]
}
