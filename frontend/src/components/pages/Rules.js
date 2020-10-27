/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './Rules.css'
export const Rules = () => {
  return (
    <div className='rules'>
      <div>
        <h2 className='rules-heading'>Rules</h2>
      </div>
      <div className='rules-wrapper'>
        <h5>Steps to register</h5>
        <ul>
          <li>
            Fill the{' '}
            <a href='https://bit.do/tech-trivia' target='_blank'>
              registration form
            </a>
          </li>
          <li>
            Create a <a href='/register'>new account</a> using the same email to
            participate in the Tech Trivia event.
          </li>
          <li>
            Complete email verification, and login to your account to
            participate.
          </li>
        </ul>
        <h5>How to play</h5>
        <div className='media mt-3'>
          <div className='media-body'>
            <h6 className='mt-0 rules-points'>Join the live game</h6>
            Don't be late or you won't be able to participate.
          </div>
        </div>
        <div className='media mt-3'>
          <div className='media-body text-right'>
            <h6 className='mt-0 rules-points mb-1'>
              20 questions, 10 seconds each
            </h6>
            Click the answer you think is correct, no penalty for incorrect
            answers.
          </div>
        </div>
        <div className='media mt-3'>
          <div className='media-body'>
            <h6 className='mt-0 rules-points'>Correct answer - 100 points</h6>
            For every correct answer 100 points will be awarded, no penalty
          </div>
        </div>
        <div className='media mt-3'>
          <div className='media-body text-right'>
            <h6 className='mt-0 rules-points mb-1'>Fastest finger first</h6>
            Submit your answers as fast as you can to earn a higher time bonus
            for every correct answer.
          </div>
        </div>
        <div className='media mt-3'>
          <div className='media-body'>
            <h6 className='mt-0 rules-points'>Leaderboard</h6>
            Participants with the highest scores win the game.
          </div>
        </div>
        <div className='media mt-3'>
          <div className='media-body text-right'>
            <h6 className='mt-0 rules-points mb-1'>Winners and certificates</h6>
            3 winners and participating certificates for all.
          </div>
        </div>
      </div>
    </div>
  )
}
