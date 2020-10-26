import React from 'react'
import './Clock.css'

export const Clock = () => {
  const value = 10
  const startClock = (value) => {
    let i = 0
    setTimeout(() => {
      if (i < value) {
        i++
        return <h2>{i}</h2>
      }
    }, 1000)
  }
  return <div>{startClock(value)}</div>
}
