import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import './footer.css'

const Footer = () => (
  <div className="footer-social-icons">
    <h4>Drop me a line?</h4>
    <ul className="social-icons">
      <li><a href="https://www.linkedin.com/in/muchao/" className="social-icon"> <i className="fa fa-linkedin hvr-shadow" /></a></li>
      <li><a href="mailto:hellotommy1994@gmail.com" className="social-icon"> <i className="fa fa-envelope hvr-shadow" /></a></li>
      <li><a href="https://medium.com/@muchao" className="social-icon"> <i className="fa fa-medium hvr-shadow" /></a></li>
      <li><a href="https://twitter.com/Muchao94" className="social-icon"> <i className="fa fa-twitter hvr-shadow" /></a></li>
    </ul>
  </div>
)

export default Footer
