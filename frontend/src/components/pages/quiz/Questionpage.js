import React from 'react'
import './Questionpage.css'

export const Questionpage = () => {
  return (
    <div className='question-page'>
      <div className='question-part'>
        <h3>Which is the latest upcomming mac os?</h3>
        <div className='answer-options'>
          <button className='answer-btn'>Answer 1</button>
          <button className='answer-btn'>Answer 2</button>
          <button className='answer-btn'>Answer 3</button>
          <button className='answer-btn'>Answer 4</button>
        </div>
      </div>
    </div>
  )
}
