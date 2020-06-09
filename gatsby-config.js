const path = require('path');

const alias = require('./webpack-alias');
const rssConfig = require('./rss-plugin-config');

module.exports = {
  siteMetadata: {
    title: "Yang Jin's Blog",
    author: 'Yang Jin',
    description:
      'Personal blog of Yang Jin, a web developer and UI designer.',
    siteUrl: 'https://www.dezineleo.com',
    social: {
      twitter: '@dezineleo',
    },
  },
  plugins: [
    rssConfig,

    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias,
        extensions: [],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-flow',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/components/BlogPost/BlogPost.js'),
        },
        // remarkPlugins: [require("remark-highlight.js")],
        rehypePlugins: [require('@mapbox/rehype-prism')],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/pages/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'assets', 'images'),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-119170920-1',
        cookieExpires: 63072000, // two years
      },
    },
  ],
};
