/* eslint-disable react/jsx-no-target-blank */
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'
import { useHistory } from 'react-router-dom'
import './Home.css'
import firebase from '../../config/firebase'

export const Home = () => {
  const [hours, setHours] = useState('00')
  const [days, setDays] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')

  const { state } = useContext(UserContext)

  const history = useHistory()

  const [userplayed, setUserplayed] = useState(false)

  useEffect(() => {
    firebase
      .fetchDataScore()
      .child('score')
      .on('value', (snapshot) => {
        if (snapshot.val() !== null) {
          if (
            Object.keys(snapshot.val()).filter(
              (item) => snapshot.val()[item].email === firebase.getUserEmail()
            )
          ) {
            setUserplayed(true)
          }
        }
      })
  }, [])

  let timer
  let compareDate = new Date(state.eventDate)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setInterval(function () {
      timeBetweenDates(compareDate)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [timer])
  function timeBetweenDates(toDate) {
    var dateEntered = toDate
    var now = new Date()
    var difference = dateEntered.getTime() - now.getTime()
    // var difference = 0
    if (difference <= 0) {
      // Timer done
      clearInterval(timer)
    } else {
      var seconds = Math.floor(difference / 1000)
      var minutes = Math.floor(seconds / 60)
      var hours = Math.floor(minutes / 60)
      var days = Math.floor(hours / 24)

      hours %= 24
      minutes %= 60
      seconds %= 60

      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }
  }

  return (
    <div id='container'>
      <div className='home-event-banner'>
        <img src='abhivyanjana.png' className='event-logo' alt='abhivyanjana' />
        <div className='home-event-banner-breaker'></div>
        <h1>
          Techno Cultural <br />
          Club
        </h1>
      </div>
      <h1 className='event-name'>Tech Trivia</h1>
      <div className='timer-wrapper'>
        <div className='timer-col-flex'>
          <span id='days'>{days}</span>
          <p>days</p>
        </div>
        <div className='timer-col-flex'>
          <span id='hours'>{hours}</span>
          <p>hours</p>
        </div>
        <div className='timer-col-flex'>
          <span id='minutes'>{minutes}</span>
          <p>minutes</p>
        </div>
        <div className='timer-col-flex'>
          <span id='seconds'>{seconds}</span>
          <p>seconds</p>
        </div>
      </div>
      {state.user !== null ? (
        <div>
          <button
            className='home-btns-rules'
            onClick={() => {
              history.push('/rules')
            }}
          >
            Rules
          </button>
          {userplayed ? (
            <button
              className='home-btns-rules'
              onClick={() => {
                history.push('/leaderboard')
              }}
            >
              Leaderboard
            </button>
          ) : (
            <button
              className='home-btns-rules'
              onClick={() => {
                history.push('/levels')
              }}
            >
              Let's start
            </button>
          )}
        </div>
      ) : (
        <p>
          Register{' '}
          <a href='https://www.bit.do/tech-trivia' target='_blank'>
            here
          </a>{' '}
          to participate in the upcoming quiz
        </p>
      )}
    </div>
  )
}
