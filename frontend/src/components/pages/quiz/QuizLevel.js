import React from 'react'
import './QuizLevel.css'

const levels = [
  {
    level: 'Easy',
    title: 'Round 1',
    description: 'Lorem ipsum is very good u know that',
    totalQuestions: '15',
  },
  {
    level: 'Medium',
    title: 'Round 2',
    description: 'Lorem ipsum is very good u know that',
    totalQuestions: '15',
  },
  {
    level: 'Hard',
    title: 'Round 3',
    description: 'Lorem ipsum is very good u know that',
    totalQuestions: '10',
  },
]

export const QuizLevel = () => {
  return (
    <div className='quiz-levels'>
      <div className='level-wrapper'>
        {levels.map((item, index) => {
          return (
            <div className='level-div' key={index}>
              {item.level}
              <br />
              {item.title}
              <br />
              {item.description}
              <br />
              {item.totalQuestions}
            </div>
          )
        })}
      </div>
    </div>
  )
}
