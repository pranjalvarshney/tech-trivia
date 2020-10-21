import React, { useState } from 'react'
import firebase from '../../config/firebase'
import './Login.css'
import { useHistory } from 'react-router-dom'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await firebase.login(email, password)
      history.replace('/')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className='login-div'>
      <form className='login' onSubmit={handleLogin}>
        <input
          type='text'
          placeholder='Username'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
