import React from 'react'
import './QuizLevel.css'

const questions = [
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
  return (
    <div>
      <button>Start quiz</button>
    </div>
  )
}
