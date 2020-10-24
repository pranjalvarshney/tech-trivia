import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from '../../auth/PrivateRoute'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { QuizLevel } from '../pages/quiz/QuizLevel'
import { Register } from '../pages/Register'

export const Routing = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <PrivateRoute exact path='/levels' component={QuizLevel} />
    </Switch>
  )
}
