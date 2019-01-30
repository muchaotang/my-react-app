import React from 'react'
import Link from 'gatsby-link'
import $ from 'jquery'
import './header.css'


// export default class Header extends React.Component {
//   componentDidMount() {
//     $(window).scroll(function () {
//       if ($(window).scrollTop() > 10) {
//         $('.Header').addClass('floatingHeader');
//       } else {
//         $('.Header').removeClass('floatingHeader');
//       }
//     }
//   }

//   render() {
//     // const myExtScript = require('./myScript')
//     return (
//       <div className='Header'>
//         <div className='HeaderGroup'>
//           <Link to='/'><img src={require('../img/logo_nav.png')} width='60' /></Link>
//           <Link to='/index'>Selected Works</Link>
//           <Link to='/uber'>Uber Thoughts</Link>
//           <Link to='/awards'>Awards</Link>
//           <Link to='/about'>About</Link>
//         </div>

//       </div>
//     );
//   }
// }

export default class Header extends React.Component {
  componentDidMount () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 10) {
        $('.Header').addClass('floatingHeader');
      } else {
        $('.Header').removeClass('floatingHeader');
      }
    })
  }

  // constructor(props){
  //   super(props)

  //   this.state = {
  //     hasScrolled: false
  //   }
  // }

  render () {
    return (
      <div className='Header'>
        <div className='HeaderGroup'>
          <Link to='/'><img src={require('../img/logo_nav.png')} width='60' /></Link>
          <Link to='/'>Selected Works</Link>
          <Link to='/uber'>Uber Thoughts</Link>
          <Link to='/awards'>Awards</Link>
          <Link to='/about'>About</Link>
        </div>
      </div>
    )
  }
}