/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../../App'
import './QuizAllLevel.css'
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone'
import LockOpenTwoToneIcon from '@material-ui/icons/LockOpenTwoTone'

export const QuizAllLevel = () => {
  const history = useHistory()

  const { state, dispatch } = useContext(UserContext)
  const [isTime, setIsTime] = useState(false)

  let timer
  useEffect(() => {
    timer = setInterval(() => {
      const difference =
        new Date(state.startDate).getTime() - new Date().getTime()

      if (difference <= 0) {
        setIsTime(true)
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [timer])

  return (
    <div className='quiz-all-levels'>
      <div className='level-wrapper'>
        <div className='level-participate'>
          <button
            style={
              isTime
                ? { backgroundColor: '#673ab7', color: 'white' }
                : { backgroundColor: '#ff6767', color: 'white' }
            }
            className='join-btn w-100 mx-auto'
            onClick={
              isTime
                ? () => {
                    if (!state.join) {
                      dispatch({
                        type: 'JOIN_GAME',
                        join: true,
                      })
                      history.push(`/round/1`)
                    } else {
                      alert(
                        'Sorry you cannot join the quiz again. Thank you for participating!'
                      )
                    }
                  }
                : () => {
                    alert(`Quiz time : ${new Date(state.startDate)}`)
                  }
            }
          >
            {isTime ? (
              <span>
                Join Now <LockOpenTwoToneIcon />
              </span>
            ) : (
              <span>
                Upcoming Quiz <LockTwoToneIcon />
              </span>
            )}
          </button>
          <p className='text-center'>Quiz Time : 2:45 pm</p>
          <div className='level-rules-wrapper'>
            <h6>How to play</h6>
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
                <h6 className='mt-0 rules-points'>
                  Correct answer - 100 points
                </h6>
                For every correct answer 100 points will be awarded, no penalty
              </div>
            </div>
            <div className='media mt-3'>
              <div className='media-body text-right'>
                <h6 className='mt-0 rules-points mb-1'>Fastest finger first</h6>
                Submit your answers as fast as you can to earn a higher time
                bonus for every correct answer.
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
                <h6 className='mt-0 rules-points mb-1'>
                  Winners and certificates
                </h6>
                3 winners and participating certificates for all.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// <div
//           className='level-div'
//
//         ></div>
// {
// }
