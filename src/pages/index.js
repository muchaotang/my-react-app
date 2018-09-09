import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to my design world.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">View my resume...</Link>
  </div>
)

export default IndexPage