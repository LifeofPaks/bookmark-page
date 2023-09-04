import React from "react";
import "./Footer.scss";
import Facebook from "../../images/icon-facebook.svg";
import Twitter from "../../images/icon-twitter.svg";

const Footer = () => {
  return (
    <section className="footer">
      <div className="left">
        <div className="logo">
          <div className="imageWrapper">
            <img
              src="https://img.icons8.com/ios-glyphs/90/ffffff/bookmark-ribbon.png"
              alt="bookmark-ribbon"
            />
          </div>

          <h3>BOOKMARK</h3>
        </div>
        <ul>
          <li>features</li>
          <li>pricing</li>
          <li>contact</li>
        </ul>
      </div>
      <div className="right">
        <div className="socials">
          <img src={Facebook} alt="icon" />
          <img src={Twitter} alt="icon" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
