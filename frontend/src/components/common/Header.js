import React, { useContext } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import './Header.css'
import firebase from '../../config/firebase'
import { UserContext } from '../../App'

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: 'tomato' }
  } else {
    return { color: 'white' }
  }
}

const Header = ({ history }) => {
  const { state, dispatch } = useContext(UserContext)
  const handle_signout = () => {
    dispatch({
      type: 'SIGN_OUT',
      user: null,
    })
    firebase.signout()
  }

  return (
    <div className='header'>
      <div className='header-wrapper'>
        <h2>Tech Trivia</h2>
        <ul className='header-li-options'>
          <li>
            <Link
              style={currentTab(history, '/')}
              to='/'
              className='link-header'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={currentTab(history, '/rules')}
              to='/rules'
              className='link-header'
            >
              Rules
            </Link>
          </li>
          <li>
            {!state.user && (
              <Link
                style={currentTab(history, '/login')}
                to='/login'
                className='link-header'
              >
                Login
              </Link>
            )}
          </li>
          <li>
            {!state.user && (
              <Link
                style={currentTab(history, '/register')}
                to='/register'
                className='link-header'
              >
                Register
              </Link>
            )}
          </li>
          <li>
            {state.user && (
              <Link onClick={handle_signout} to='/' className='link-header'>
                Logout
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}
export default withRouter(Header)
