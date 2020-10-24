import React, { useState } from 'react'
import './Login.css'
import { useHistory } from 'react-router-dom'
import firebase from '../../config/firebase'

export const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  // console.log(name + email + password)

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      await firebase.register(name, email, password)
      history.replace('/')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className='register-div'>
      <form className='login' onSubmit={handleRegister}>
        <h4>Create a new account</h4>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          name='email'
          placeholder='E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='button-div'>
          <button type='submit'>Login</button>
          <h6
            onClick={() => {
              history.push('/login')
            }}
            style={{
              cursor: 'pointer',
              textAlign: 'right',
              margin: 'auto 0',
            }}
          >
            Already have an account! <br /> Login
          </h6>
        </div>
      </form>
    </div>
  )
}
