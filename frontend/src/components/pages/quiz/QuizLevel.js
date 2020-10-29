import React, { useContext, useEffect, useState } from 'react'
import './QuizLevel.css'
import { Questionpage } from './Questionpage'
import { UserContext } from '../../../App'
import firebase from '../../../config/firebase'

const allQuestions = [
  {
    question:
      'Which of these is not one of the early “protocols,” or ways to use the Internet?',
    correct_answer: 'Blogging',
    incorrect_answer: ['FTP', 'Gopher', 'Tel-net'],
  },
  {
    question: 'Computer trojans are an example of:',
    correct_answer: 'malware',
    incorrect_answer: ['computer worms', 'spyware', 'carding'],
  },
  {
    question:
      'If level at which the software uses scare resources is .........',
    correct_answer: 'Efficiency',
    incorrect_answer: ['Reliability', 'Portability', 'All of the Above'],
  },
  {
    question:
      'What was the name of the chess-playing computer that made history when it defeated world champion Garry Kasparov in 1996?',
    correct_answer: 'Deep Blue',
    incorrect_answer: ['Rybka', 'Chiptest', 'Deep Thought'],
  },
  {
    question: 'Who coined the term "artificial intelligence"?',
    correct_answer: 'John McCarthy',
    incorrect_answer: [
      'Charles Bachman',
      'Herbert A. Simon',
      'Donald Ervin Knuth',
    ],
  },
  {
    question: 'Which is the latest upcoming Apple macOs?',
    correct_answer: 'Big Sur',
    incorrect_answer: ['Catalina', 'Mavericks', 'Mojave'],
  },
  {
    question: 'Shell is the exclusive feature of ........ ',
    correct_answer: 'UNIX',
    incorrect_answer: ['DOS', 'System Software', 'Application Software'],
  },
  {
    question: 'In what year was Google founded?',
    correct_answer: '1998',
    incorrect_answer: ['1989', '1995', '1992'],
  },
  {
    question:
      'Google unveiled new Cloud Platform, to manage apps from anywhere. It was named as .....',
    correct_answer: 'Anthos',
    incorrect_answer: ['Azure', 'Midru', 'Kuber'],
  },
  {
    question: `Which coompany has launched its first brand campaign 'It's Between You' in India that narrates real stories about how Indians communicate daily' in their closest relationships?`,
    correct_answer: 'WhatsApp',
    incorrect_answer: ['Signal ', 'Facebook', 'Telegram'],
  },
  {
    question: 'What type of electromagnetic waves does Wi-Fi use?',
    correct_answer: 'Radio waves',
    incorrect_answer: ['Gamma rays', 'Microwaves', 'Infrared waves'],
  },
  {
    question:
      'A number that uniquely identifies each computer on the Internet is called:',
    correct_answer: 'IP address',
    incorrect_answer: ['Domain Name Server', 'MAC address', 'Email address'],
  },
  {
    question: 'Which statement below is true for linux?',
    correct_answer: 'Linux is Unix-like',
    incorrect_answer: [
      'Linux is same as Unix',
      'Linux is a version of Linux',
      'Linux is unrelated to Unix',
    ],
  },
  {
    question:
      'What is the name of the digital file format that was devised in 1987 to reduce the size of images and short animations?',
    correct_answer: 'GIF',
    incorrect_answer: ['TIFF', 'PNG', 'JPEG'],
  },
  {
    question: 'Which of these is an example of an integrated circuit?',
    correct_answer: 'Sound card',
    incorrect_answer: ['Rectifier', 'Battery', 'Thyristor'],
  },
  {
    question: 'Which of these companies is not an automobile manufacturer?',
    correct_answer: 'Air Bus',
    incorrect_answer: ['General Motors', 'Fiat', 'Volvo'],
  },
  {
    question: 'What was the first graphical browser for the World Wide Web?',
    correct_answer: 'Mosaic',
    incorrect_answer: ['Firefox', 'MS-DOS', 'Basic'],
  },
  {
    question:
      'ISRO released the picture of the closest and biggest moon of Mars named "Phobos". Who was the founder of ISRO?',
    correct_answer: 'Vikram Sarabhai',
    incorrect_answer: [
      'Har Gobind Khorana',
      'A.P.J. Abdul Kalam',
      'Homi J. Bhabha',
    ],
  },
  {
    question:
      'Name of the programme that is jointly launched by Google India & Tata Trusts to facilitate digital literacy among women in rural India.',
    correct_answer: 'Internet Saathi',
    incorrect_answer: ['New India', 'Women Power', 'Techie Women'],
  },
  {
    question: `Who registered a new cryptocurrency firm named 'Libra Networks LLC' in Geneva, Switzerland?`,
    correct_answer: 'Facebook',
    incorrect_answer: ['BuyUcoin', 'Tesla', 'Paytm'],
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
    if (!showAnswers && btime > 0) {
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
  if (!showAnswers && !startBtn) {
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
        <div className='start-btn-div'>
          <button
            className='start-button'
            onClick={() => {
              setStartBtn(false)
            }}
          >
            Start quiz
          </button>
          <small>You can only play once. So don't try to close the site</small>
        </div>
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
              currentIndex={currentIndex}
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
