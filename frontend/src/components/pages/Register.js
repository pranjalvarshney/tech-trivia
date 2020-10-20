import React, { useState } from 'react'
import './Login.css'
import { auth } from '../../config/firebase'

export const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // console.log(name + email + password)

  const handleRegister = async (e) => {
    e.preventDefault()

    try {
      await auth.createUserWithEmailAndPassword(email, password)
      return auth.currentUser.updateProfile({
        displayName: name,
      })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <form className='login' onSubmit={handleRegister}>
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
        <button type='submit'>Login</button>
      </form>
    </>
  )
}
