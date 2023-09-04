import React, { useState } from "react";
import "./Home.scss";
import Logo from "../../images/logo-bookmark.svg";
import HeroImg from "../../images/illustration-hero.svg";
import Hamburger from "../../images/icon-hamburger.svg";
import Close from "../../images/icon-close.svg";
import Facebook from "../../images/icon-facebook.svg";
import Twitter from "../../images/icon-twitter.svg";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="home">
      <nav className={showMenu ? "hide" : ""}>
        <div className="left">
          <img src={Logo} alt="logo" />
        </div>

        <ul className="right">
          <li>features</li>
          <li>pricing</li>
          <li>contact</li>
          <li className="login">login</li>
        </ul>

        <img
          src={Hamburger}
          alt="icon"
          className="hamburger"
          onClick={toggleMenu}
        />
      </nav>

      <div className={`mobileNav ${showMenu ? "show" : ""}`}>
        <div className="navWrapper">
          <div className="top">
            <div className="logo">
              <div className="imageWrapper">
                <img
                  src="https://img.icons8.com/ios-glyphs/90/252b46f4/bookmark-ribbon.png"
                  alt="bookmark-ribbon"
                />
              </div>

              <h3>BOOKMARK</h3>
            </div>
            <img src={Close} alt="close" onClick={toggleMenu} />
          </div>
          <ul className="links">
            <li>features</li>
            <li>pricing</li>
            <li>contact</li>
          </ul>

          <button className="login">login</button>
          <div className="socials">
            <img src={Facebook} alt="icon" />
            <img src={Twitter} alt="icon" />
          </div>
        </div>
      </div>

      <section className="hero">
        <div className="left">
          <h1> A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="btnWrapper">
            <button className="blueBtn"> Get it on Chrome</button>
            <button className="btn"> Get it on Firefox</button>
          </div>
        </div>

        <div className="right">
          <img src={HeroImg} alt="hero-img" />
          <div className="bgImage"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
