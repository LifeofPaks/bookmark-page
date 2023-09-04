import React, { useState } from 'react'
import './Question.scss'


const Question = ({question, answer, arrow}) => {
    const [showAnswer, setShowAnswer] = useState(false)
    
  return (
    <section className='wrapper'>
           <div
            className={`content ${showAnswer ? "show" : ""}`}
            onClick={() => setShowAnswer(!showAnswer)}
          >
            <div className="question">
              <h3> {question}</h3>
              <img src={arrow} alt="arrow" />
            </div>

            <p >{answer}</p>
          </div>
    </section>
  )
}

export default Question