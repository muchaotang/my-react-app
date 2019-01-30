module.exports = {
  siteMetadata: {
    title: 'MT Design',
    description: "I'm Muchao, currently designing for Map and Customer Identity @Uber.Interested in education, technology, entrepreneurship. Empathy, craft and a handful of craziness are the secret sauce of my work. ", 
    keywords: 'uber, designer, product design, portfolio, leader'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId:'qrqx71wkj2fd',
        accessToken:'74f166cfaac831a7897d579403fbdcf4a3d4f6551c85765d07dbc4024a311f49'
      }
    }
  ],
}
