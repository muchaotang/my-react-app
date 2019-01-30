import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import $ from 'jquery'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: data.site.siteMetadata.keywords },
      ]}
    />
    <Header />

    {children()}
    {data.allContentfulLink.edges.map(edge => (
      <a href={edge.node.url}>{edge.node.title}</a>
    ))}

    <Footer />


  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    
    allContentfulLink(sort: { fields: [createdAt], order: ASC }) 
    {
      edges {
        node {
          title
          url 
          createdAt
        }
      }
    }
  }
`
// function newFunction(data) {
//   return <Helmet title={data.site.siteMetadata.title} meta={[
//     { name: 'description', content: 'Sample' },
//     { name: 'keywords', content: 'sample, something' },
//   ]} />;
// }

