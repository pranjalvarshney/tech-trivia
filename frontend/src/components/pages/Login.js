import React from 'react'
import './Login.css'

export const Login = () => {
  return (
    <>
      <form class='login'>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button>Login</button>
      </form>
    </>
  )
}
