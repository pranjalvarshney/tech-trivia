import React, { useEffect, useState } from 'react'
import './QuizLevel.css'
import axios from 'axios'
import { Questionpage } from './Questionpage'
import { Clock } from './Clock'

const allQuestions = [
  {
    question: 'Who is known as the father of computer?',
    correct_answer: 'Charles Babbage',
    incorrect_answer: ['Tim Berners Lee', 'Bill Gates', 'Steve Jobs'],
  },
  {
    question: 'Who is known as the father of computer?',
    correct_answer: 'Charles Babbage',
    incorrect_answer: ['Tim Berners Lee', 'Bill Gates', 'Steve Jobs'],
  },
]
export const QuizLevel = () => {
  const [questions, setQuestions] = useState([])
  const [startBtn, setStartBtn] = useState(true)
  // const fetchQuestions = () => {
  //   axios
  //     .get('https://run.mocky.io/v3/6f0cc203-0470-40b7-9169-cf2a37168773')
  //     .then((res) => {
  //       console.log(res)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }
  useEffect(() => {
    setQuestions(allQuestions)
    // fetchQuestions()
  }, [])

  return (
    <div>
      <Clock />
      {startBtn && (
        <button
          onClick={() => {
            setStartBtn(false)
          }}
        >
          Start quiz
        </button>
      )}
      {!startBtn && (
        <div>
          <Questionpage questions={questions[0]} />
        </div>
      )}
    </div>
  )
}
