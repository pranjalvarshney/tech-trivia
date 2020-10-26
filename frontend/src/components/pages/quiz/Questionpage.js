import React from 'react'
import './Questionpage.css'

export const Questionpage = ({ questions, handleAnswerBtn }) => {
  const shuffledAnswer = [
    questions.correct_answer,
    ...questions.incorrect_answer,
  ].sort(() => Math.random() - 0.5)

  console.log(shuffledAnswer)
  return (
    <div className='question-page'>
      <div className='question-part'>
        <h5 className='question-div'>{questions.question}</h5>
        <div className='answer-options'>
          {shuffledAnswer.map((item, index) => (
            <button
              key={index}
              className={`${
                questions.correct_answer === item ? 'bg-success' : ''
              } answer-btn`}
              onClick={() => {
                handleAnswerBtn(item)
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
