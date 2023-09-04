import React from "react";
import "./Download.scss";
import Chrome from '../../images/logo-chrome.svg'
import Firefox from '../../images/logo-firefox.svg'
import Opera from '../../images/logo-opera.svg'

const cards = [
  {
    id: 1, 
    image: Chrome,
    title: '  Add to Chrome',
    info: 'Minimum version 62',
    style: 's1'
  },

  {
    id: 2, 
    image: Firefox,
    title: ' Add to Firefox',
    info: ' Minimum version 55',
    style: 's2'
  },

  {
    id: 3, 
    image: Opera,
    title: ' Add to Opera',
    info: 'Minimum version 46',
    style: 's3'
  }
]

const Download = () => {
  return (
    <section className="download">
      <div className="title">
        <h2> Download the extension</h2>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>

      <div className="cardContainer">
        {
          cards.map(card =>(
            <div className={`card ${card.style}`} key={card.id}>
                <img src={card.image} alt="card-img" />
                  <h3>{card.title}</h3>
                  <p>{card.info}</p>
                  <button className="blueBtn">Add & Install Extension</button>
            </div>
          ))
        }
       
      </div>
    </section>
  );
};

export default Download;
