import React, { createContext, useContext, useEffect, useReducer } from 'react'
import './App.css'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import { Routing } from './components/common/Routing'
import Header from './components/common/Header'
import { initialState, reducer } from './reducer'

export const UserContext = createContext()

const App = () => {
  const history = useHistory()

  const [state, dispatch] = useReducer(reducer, initialState)

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
