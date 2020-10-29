import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute } from '../../auth/PrivateRoute'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { QuizAllLevel } from '../pages/quiz/QuizAllLevel'
import { Register } from '../pages/Register'
import { ComingSoon } from './ComingSoon'
import { Contact } from '../pages/Contact'
import { QuizLevel } from '../pages/quiz/QuizLevel'
import { Leaderboard } from '../pages/Leaderboard'
import { Rules } from '../pages/Rules'

export const Routing = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/rules' component={Rules} />
      {/* <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} /> */}
      <Route exact path='/leaderboard' component={Leaderboard} />
      {/* <PrivateRoute exact path='/levels' component={QuizAllLevel} />
      <PrivateRoute exact path='/round/1' component={QuizLevel} /> */}
      <Route to='/' component={ComingSoon} />
    </Switch>
  )
}
