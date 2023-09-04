import React, { useState } from "react";
import "./Feature.scss";
import { featureData } from "../../data/Data";

const Feature = () => {
  const [dataIndex, setDataIndex] = useState(1);
  const currentData = featureData[dataIndex];
  const { image, title, id, info } = currentData;

  const links = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

  return (
    <section className="feature">
      <div className="title">
        <h2> Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>

      <ul className="titleWrapper">
        {links.map((link, index) => (
          <li
          key={index}
            className={index == dataIndex ? "active" : ""}
            onClick={() => setDataIndex(index)}
          >
            {link}
          </li>
        ))}
      </ul>

      <div className="displayWrapper">
        <div className="left">
          <div className="bgImage"></div>
          <img src={image} alt="display-image" />
        </div>
        <div className="right">
          <h3>{title}</h3>
          <p>{info}</p>

          <button className="blueBtn"> More Info</button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
