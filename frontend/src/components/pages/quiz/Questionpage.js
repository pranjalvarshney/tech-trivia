import React from 'react'
import './Questionpage.css'

const OptionButton = ({ answer }) => {
  return <button className='answer-btn'>{answer}</button>
}

export const Questionpage = ({ questions }) => {
  return (
    <div className='question-page'>
      <div className='question-part'>
        <h5 className='question-div'>{questions.question}</h5>
        <div className='answer-options'>
          <OptionButton answer={questions.correct_answer}></OptionButton>
          <OptionButton answer={questions.incorrect_answer[0]}></OptionButton>
          <OptionButton answer={questions.incorrect_answer[1]}></OptionButton>
          <OptionButton answer={questions.incorrect_answer[2]}></OptionButton>
        </div>
      </div>
    </div>
  )
}
