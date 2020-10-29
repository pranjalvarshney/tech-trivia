import React from 'react'
import './Questionpage.css'

export const Questionpage = ({
  questions,
  handleAnswerBtn,
  showAnswers,
  handleNextQuestion,
  timer,
  currentIndex,
}) => {
  // const shuffledAnswer = [
  //   questions.correct_answer,
  //   ...questions.incorrect_answer,
  // ].sort(() => Math.random() - 0.5)

  return (
    <div className='question-page'>
      <div className='question-part'>
        <div className='timer-div'>{timer + 's'}</div>
        <h5 className='question-div'>
          {`Q${currentIndex + 1} - ${questions.question}`}
        </h5>
        <div className='answer-options'>
          {questions.answer.map((answer, index) => {
            const showAnswerColor = showAnswers
              ? answer === questions.correct_answer
                ? { background: '#a4de6a', color: 'white', fontWeight: 'bold' }
                : { background: '#f0808094', color: 'white' }
              : { background: 'white' }

            return (
              <button
                style={showAnswerColor}
                key={index}
                className={`answer-btn`}
                onClick={() => {
                  handleAnswerBtn(answer, timer)
                }}
              >
                {answer}
              </button>
            )
          })}
        </div>
        {showAnswers && (
          <button
            className='btn btn-sm next-question'
            style={{ backgroundColor: '#9e9e9e73' }}
            onClick={handleNextQuestion}
          >
            Next question
          </button>
        )}
      </div>
    </div>
  )
}
