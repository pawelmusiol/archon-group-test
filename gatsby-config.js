const path = require('path')

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    pathPrefix: "/archon-group-test",
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: "images",
                path: path.join(__dirname, `src`, `images`),
            }
        },
        `gatsby-plugin-sass`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`
    ]
}