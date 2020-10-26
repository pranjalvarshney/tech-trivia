import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './QuizLevel.css'

export const QuizAllLevel = () => {
  const history = useHistory()
  return (
    <div className='quiz-levels'>
      <div className='level-wrapper'>
        <div
          className='level-div'
          onClick={() => {
            history.push(`/round/1`)
          }}
        >
          <p>Round 1</p>
          <br />
          <p>Lorem ipsum is very good u know that</p>
          <br />
          <p>15 questions</p>
        </div>
      </div>
    </div>
  )
}
