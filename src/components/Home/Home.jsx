import React from 'react'
import './Home.scss'
import Logo from '../../images/logo-bookmark.svg'
import HeroImg from '../../images/illustration-hero.svg'

const Home = () => {
  return (
    <div className='home'> 
      <nav>
        <div className="left">
          <img src={Logo} alt="logo" />
        </div>

        <ul className="right">
          <li>features</li>
          <li>pricing</li>
          <li>contact</li>
          <li className='login'>login</li>
        </ul>

      </nav>

      <section className="hero">
          <div className="left">
            <h1> A Simple Bookmark Manager</h1>
            <p>  A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free.</p>
            <div className="btnWrapper">
              <button className="blueBtn"> Get it on Chrome</button>
              <button className='btn'>  Get it on Firefox</button>
            </div>
          </div>

          <div className="right">
            <img src={HeroImg} alt="hero-img" />
            <div className="bgImage"></div>
          </div>
      </section>
        
    </div>
  )
}

export default Home