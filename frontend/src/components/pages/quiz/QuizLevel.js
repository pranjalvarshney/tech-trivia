import React, { useContext, useEffect, useState } from 'react'
import './QuizLevel.css'
import { Questionpage } from './Questionpage'
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
  {
    question:
      'If level at which the software uses scare resources is .........',
    correct_answer: 'Efficiency',
    incorrect_answer: ['Reliability', 'Portability', 'All of the Above'],
  },
  {
    question:
      'Which method is used for evaluating the expression that passes the function as an argument?',
    correct_answer: 'Strict evaluation',
    incorrect_answer: ['Recursion', 'Calculus', 'Pure functions'],
  },
  {
    question:
      'Translator for low level programming language were termed as ........ ',
    correct_answer: 'Assembler',
    incorrect_answer: ['Compiler', 'Linker', 'Loader'],
  },
  {
    question: 'Shell is the exclusive feature of ........ ',
    correct_answer: 'UNIX',
    incorrect_answer: ['DOS', 'System Software', 'Application Software'],
  },
  {
    question:
      'The program used to drive microprocessor-based systems is called: ........ ',
    correct_answer: 'assembly language programs',
    incorrect_answer: [
      'firmware',
      'BASIC interpreter instructions',
      'flowchart instructions',
    ],
  },
]
export const QuizLevel = () => {
  const { state, dispatch } = useContext(UserContext)

  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userScore, setUserScore] = useState(0)
  const [startBtn, setStartBtn] = useState(true)
  const [ifGameEnded, setIfGameEnded] = useState(false)
  const [showAnswers, setShowAnswers] = useState(false)
  const [scoreSubmitted, setScoreSubmitted] = useState(false)

  const [timer, setTimer] = useState(10)
  // const [bonusTime, setbonusTime] = useState(0)

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
    const shuffledAnswerQuestions = allQuestions.map((ques) => ({
      ...ques,
      answer: [ques.correct_answer, ...ques.incorrect_answer].sort(
        () => Math.random() - 0.5
      ),
    }))
    setQuestions(shuffledAnswerQuestions)
    // fetchQuestions()
  }, [])

  const handleAnswerBtn = (answer, btime) => {
    if (!showAnswers) {
      if (questions[currentIndex].correct_answer === answer) {
        dispatch({
          type: 'INCREMENT_SCORE',
          score: state.score + 100 + btime,
        })
        setUserScore(userScore + 100 + btime)
      }
    }
    setShowAnswers(true)
  }

  const submitScore = () => {
    if (!scoreSubmitted) {
      firebase.submitScore({
        name: firebase.getUserName(),
        email: firebase.getUserEmail(),
        score: userScore,
      })
      setScoreSubmitted(true)
    }
  }
  const handleNextQuestion = () => {
    setShowAnswers(false)
    let newIndex = currentIndex + 1
    setCurrentIndex(newIndex)
    setTimer(10)
    if (newIndex >= questions.length) {
      setIfGameEnded(true)
    }
  }

  if (ifGameEnded) {
    submitScore()
  }
  if (!showAnswers) {
    setTimeout(() => {
      if (timer <= 0) {
        setShowAnswers(true)
      } else {
        setTimer(timer - 1)
      }
    }, 1000)
  }
  return (
    <div className='quizlevel container'>
      {startBtn && (
        <button
          className='start-button'
          onClick={() => {
            setStartBtn(false)
          }}
        >
          Start quiz
        </button>
      )}
      {ifGameEnded ? (
        <div className='quiz-ended'>
          <h2>
            Thank you! <br /> for participating in the tech trivia quiz.
          </h2>
          <div>
            <h3>
              Your score : <b>{userScore}</b>
            </h3>
            <div className='table-responsive'>
              <table className='table'>
                <thead className='thead-danger'>
                  <tr>
                    <th scope='col'>Total Questions</th>
                    <th scope='col'>Correct Answers</th>
                    <th scope='col'>Incorrect Answers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{questions.length}</td>
                    <td>{parseInt(userScore / 100)}</td>
                    <td>{questions.length - parseInt(userScore / 100)}</td>
                  </tr>
                </tbody>
              </table>
              <h4>
                Bonus points : {userScore - parseInt(userScore / 100) * 100}
              </h4>
            </div>
          </div>
        </div>
      ) : (
        !startBtn &&
        (questions.length > 0 ? (
          <div>
            <Questionpage
              showAnswers={showAnswers}
              questions={questions[currentIndex]}
              handleAnswerBtn={handleAnswerBtn}
              handleNextQuestion={handleNextQuestion}
              timer={timer}
            />
          </div>
        ) : (
          <div>Loading</div>
        ))
      )}
    </div>
  )
}
