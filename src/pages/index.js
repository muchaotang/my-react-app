import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import staticdata from '../../staticdata.json';
import Cell from '../components/Cell';

import styled from 'styled-components';

const SectionCaption = styled.p `
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
`

const SectionCellGroup = styled.div `
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2,auto);
  padding: 60px;
  grid-column-gap: 30px;

  @media(max-width:800px) {
    grid-template-columns: repeat(1,1fr)
  }
`

const IndexPage = () => (
  <div>
    <div className='Hero'>

      {/* <video className="video-background" src={require('../img/muchao.mp4')} autoPlay muted type="video/mp4">
      </video> */}

      <div className='HeroGroup'>
        <h1>HELLO!</h1>
        <p>I'm Muchao, currently designing for Map and Customer Identity @Uber.<br/>
        Interested in education, technology, entrepreneurship.<br/>
        Empathy, craft and a handful of craziness are the secret sauce of my work.
        I write blogs on <Link to='https://medium.com/@muchao'>Medium</Link> and <Link to='https://www.zhihu.com/people/muuuchao'>知乎</Link><br/></p>
        
        <div className='Logos'>
          <img src={require('../img/logo-sketch.png')} width="50" />
          <img src={require('../img/logo-figma.png')} width="50" />
          <img src={require('../img/logo-studio.png')} width="50" />
          <img src={require('../img/logo-framer.png')} width="50" />
          <img src={require('../img/logo-react.png')} width="50" />
          <img src={require('../img/logo-swift.png')} width="50" />
        </div>
        
      </div>     

    
      <svg width='100%' height='279' viewBox='0 0 100% 279' fill='none'>
        <path fill='rgba(80, 226, 193,50%)'>
          
          <animate repeatCount="indefinite" fill='freeze' attributeName='d' dur='10s'
    values='M266.629 0.394382C122.423 -5.60791 83.6482 58.4165 0 89.4284V277H1263V172.5C1223.77 151.457 1020.25 147.96 1000.5 150C869.55 163.531 712.113 171.921 593.5 132.5C474.73 93.0265 394.786 5.7287 266.629 0.394382Z;

    M281.5 104.522C137.294 96.3517 83.6482 -20.1398 0 22.0729V277.392H1263V135.148C1223.77 106.505 1159 0.391617 971.5 0.391602C834.761 0.39159 814.595 53.7857 703 82.5C599.573 109.112 404.708 111.502 281.5 104.522Z;
    
    M257 190.299C112.794 181.435 46 109.815 0 0.428223V277.428H1263V123.106C1233 207.282 1157.5 190.299 1049 190.299C927.078 190.299 788.247 232.937 665 235C521.914 237.395 394.613 198.758 257 190.299Z;
    
    M266.629 0.394382C122.423 -5.60791 83.6482 58.4165 0 89.4284V277H1263V172.5C1223.77 151.457 1020.25 147.96 1000.5 150C869.55 163.531 712.113 171.921 593.5 132.5C474.73 93.0265 394.786 5.7287 266.629 0.394382Z;' />
        </path>
      </svg>
    </div>
    
    <div className="Cards">
      <h2>Featuring UX, Industrial, visual design</h2>
      <div className='CardGroup'>
        <Card
          title="React for designers"
          text="12 sections"
          image={require('../img/cover_pics/cmc.jpg')}
        />
        <Card
          title="React for designers"
          text="12 sections"
          image={require('../img/cover_pics/cmc.jpg')}
        />
        <Card
          title="React for designers"
          text="12 sections"
          image={require('../img/cover_pics/cmc.jpg')}
        />
        <Card
          title="React for designers"
          text="12 sections"
          image={require('../img/cover_pics/cmc.jpg')}
        />
      </div>
    </div>

    

    <div className="Projects">
      <div className="Project">
        <div className="ProjectContent">
          <Link to="./oneuber">
            <div className="BlackOverlay"></div>
            <img className="ProjectCover" src={require("../img/cover_pics/OneUber.png")} />
            <div className="OverlayText"><b>Uber is an ecosystem</b><br />UX | UI</div>
          </Link>
        </div>
        <div className="ProjectTitle"><h4>OneUber</h4></div>
      </div>

      <div className="Project">
        <div className="ProjectContent">
          <Link to="./oneuber">
            <div className="BlackOverlay"></div>
            <img className="ProjectCover" src={require("../img/cover_pics/OneUber.png")} />
            <div className="OverlayText"><b>Uber is an ecosystem</b><br />UX | UI</div>
          </Link>
        </div>
        <div className="ProjectTitle"><h4>OneUber</h4></div>
      </div>

      <div className="Project">
        <div className="ProjectContent">
          <Link to="./oneuber">
            <div className="BlackOverlay"></div>
            <img className="ProjectCover" src={require("../img/cover_pics/OneUber.png")} />
            <div className="OverlayText"><b>Uber is an ecosystem</b><br />UX | UI</div>
          </Link>
        </div>
        <div className="ProjectTitle"><h4>OneUber</h4></div>
      </div>

      <div className="Project">
        <div className="ProjectContent">
          <Link to="./oneuber">
            <div className="BlackOverlay"></div>
            <img className="ProjectCover" src={require("../img/cover_pics/OneUber.png")} />
            <div className="OverlayText"><b>Uber is an ecosystem</b><br />UX | UI</div>
          </Link>
        </div>
        <div className="ProjectTitle"><h4>OneUber</h4></div>
      </div>

      <div className="Project">
        <div className="ProjectContent">
          <Link to="./oneuber">
            <div className="BlackOverlay"></div>
            <img className="ProjectCover" src={require("../img/cover_pics/OneUber.png")} />
            <div className="OverlayText"><b>Uber is an ecosystem</b><br />UX | UI</div>
          </Link>
        </div>
        <div className="ProjectTitle"><h4>OneUber</h4></div>
      </div>
    </div>

    <Section 
      image={require('../img/wallpaper2.jpg')}
      logo={require('../img/logo-react.png')}
      title="React for Designers"
      text="asdasdawewe"
      />

    <SectionCaption>6 sections</SectionCaption>
    <SectionCellGroup>
    {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
    ))}
    </SectionCellGroup>


  </div>
)

export default IndexPage
