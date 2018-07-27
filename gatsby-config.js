module.exports = {
  siteMetadata: {
    title: 'RyanWillDev | Software Developer',
    description:
      'Software Developer in the Nashville area with a passion for learning, teaching, and creating custom software solutions.',
    siteKeywords:
      'nashville, tennessee, software, development, developer, website, custom, blog, web developer, software developer, dickson',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: '>',
              aliases: {},
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1040,
              backgroundColor: 'rgba(49,50,51, 0.3)',
              wrapperStyle:
                'margin-top: 2rem; margin-left:auto; margin-right: auto;',
              showCaptions: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-120539917-1',
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'RyanWillDev',
        short_name: 'RyanWillDev',
        start_url: '/',
        background_color: '#313233',
        theme_color: '#bcbcbc',
        display: 'minimal-ui',
        icon: 'static/pwa_icon.png',
      },
    },
    `gatsby-plugin-offline`, // Must be after manifest so SW can use it
  ],
};
