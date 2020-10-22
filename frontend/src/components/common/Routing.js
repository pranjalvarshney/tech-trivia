import React, { useContext } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { UserContext } from '../../App'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Questionpage } from '../pages/quiz/Questionpage'
import { Register } from '../pages/Register'

export const Routing = () => {
  const history = useHistory()
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/register'>
        <Register />
      </Route>
    </Switch>
  )
}
