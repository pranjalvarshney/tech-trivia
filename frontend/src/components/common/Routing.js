import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { PrivateRoute } from '../../auth/PrivateRoute'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Questionpage } from '../pages/quiz/Questionpage'
import { QuizAllLevel } from '../pages/quiz/QuizAllLevel'
import { Register } from '../pages/Register'
import { ComingSoon } from './ComingSoon'
import { Contact } from '../pages/Contact'

export const Routing = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />


      <Route exact path='/login' component={Login} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <PrivateRoute exact path='/levels' component={QuizAllLevel} />
      <PrivateRoute exact path='/round/1' component={Questionpage} /> 
      <Route to='/' component={ComingSoon} />
    </Switch>
  )
}
