import React from 'react'
import './Clock.css'

export const Clock = () => {
  return (
    <div>
      <div class='wrapper'>
        <div class='spinner pie'></div>
        <div class='filler pie'></div>
        <div class='mask'></div>
      </div>
    </div>
  )
}
