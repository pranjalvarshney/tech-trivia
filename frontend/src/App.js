import React, { createContext, useEffect, useReducer } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routing } from './components/common/Routing'
import Header from './components/common/Header'
import { initialState, reducer } from './reducer'
import firebase from './config/firebase'

export const UserContext = createContext()

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    firebase.isInitialized().onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER ',
          user: null,
        })
      }
    })
  }, [dispatch])
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <Header />
          <Routing />
        </Router>
      </UserContext.Provider>
    </>
  )
}

export default App
