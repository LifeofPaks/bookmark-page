import React from "react";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <span> 35,000+ already joined</span>
        <h2>Stay up-to-date with what we’re doing</h2>

        <form>
          <input type="text" placeholder="Enter your email address"/>
          <button className="redBtn"> Contact Us</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
