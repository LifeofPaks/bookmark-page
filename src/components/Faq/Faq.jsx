import React, { useState } from "react";
import "./Faq.scss";
import { faqData } from "../../data/Data";
import Question from "../Question/Question";

const Faq = () => {
 

  return (
    <div className="faq">
      <div className="title">
        <h2> Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>

      <div className="wrapper">
        {faqData.map((item) => (
          <Question key={item.id} {...item}/>
        ))}
      </div>

      <button className="blueBtn">More Info</button>
    </div>
  );
};

export default Faq;
