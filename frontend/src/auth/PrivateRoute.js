import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from '../App'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(UserContext)

  return (
    <Route
      {...rest}
      render={(props) =>
        state.user !== null ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  )
}
