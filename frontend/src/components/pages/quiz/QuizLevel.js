import React, { useContext, useEffect, useState } from 'react'
import './QuizLevel.css'
import { Questionpage } from './Questionpage'
import { Clock } from './Clock'
import { UserContext } from '../../../App'
import firebase from '../../../config/firebase'

const allQuestions = [
  {
    question: 'Who is known as the father of computer?',
    correct_answer: 'Charles Babbage',
    incorrect_answer: ['Tim Berners Lee', 'Bill Gates', 'Steve Jobs'],
  },
  {
    question: 'Which is the latest mac os?',
    correct_answer: 'windows',
    incorrect_answer: ['eweb', 'Siera', 'Mojave'],
  },
]
export const QuizLevel = () => {
  const { state, dispatch } = useContext(UserContext)

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userScore, setUserScore] = useState(0)
  const [startBtn, setStartBtn] = useState(true)
  const [ifGameEnded, setIfGameEnded] = useState(false)

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

  const handleAnswerBtn = (answer) => {
    let newIndex = currentIndex + 1
    if (questions[currentIndex].correct_answer === answer) {
      dispatch({
        type: 'INCREMENT_SCORE',
        score: state.score + 100,
      })
      setUserScore(userScore + 100)
    }
    setCurrentIndex(newIndex)
    if (newIndex >= questions.length) {
      setIfGameEnded(true)
    }
  }

  if (ifGameEnded) {
    firebase.submitScore({
      name: firebase.getUserName(),
      email: firebase.getUserEmail(),
      score: userScore,
    })
  }

  return (
    <div>
      {startBtn && (
        <button
          onClick={() => {
            setStartBtn(false)
          }}
        >
          Start quiz
        </button>
      )}
      {ifGameEnded ? (
        <div>The quiz ended ... yout score is {userScore}</div>
      ) : (
        !startBtn &&
        (questions.length > 0 ? (
          <div>
            <Clock />
            <Questionpage
              questions={questions[currentIndex]}
              handleAnswerBtn={handleAnswerBtn}
            />
          </div>
        ) : (
          <div>Loading</div>
        ))
      )}
    </div>
  )
}
