import React, { useContext, createContext, useReducer } from 'react'

// prepares the data-layer --- creates a context
export const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  )
}

// used to pull infomation where ever needed
export const useStateValue = () => useContext(StateContext)
