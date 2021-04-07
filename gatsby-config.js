module.exports = {
  siteMetadata: {
    title: 'Portfolio Przemysław Cichoń',
    description: 'Website with my projects.',
    author: '@PCichon',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'PORTFOLIO',
        fieldName: 'portfolio',
        url:
          'https://api-eu-central-1.graphcms.com/v2/ckn5y6x6jvddr01xsg80zbf9o/master',
      },
    },
    `gatsby-plugin-transition-link`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-gatsby-cloud',
  ],
};
