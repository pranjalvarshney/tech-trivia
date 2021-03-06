import React, { useContext } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import './Header.css'
import firebase from '../../config/firebase'
import { UserContext } from '../../App'

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return {
      color: 'white',
      background: '#e94057',
      borderRadius: '20px',
      padding: '3px 10px',
      margin: '0 10px',
    }
  } else {
    return {
      color: 'grey',
      borderRadius: '20px',
      padding: '3px 10px',
      margin: '0 10px',
    }
  }
}

const Header = ({ history }) => {
  const { state, dispatch } = useContext(UserContext)
  const historypush = useHistory()
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
        <h2
          style={{ cursor: 'pointer' }}
          onClick={() => {
            historypush.push('/')
          }}
        >
          Tech Trivia
        </h2>
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
            <Link
              style={currentTab(history, '/contact')}
              to='/contact'
              className='link-header'
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              style={currentTab(history, '/leaderboard')}
              to='/leaderboard'
              className='link-header'
            >
              Leaderboard
            </Link>
          </li>
          {/* {!state.user && (
            <li>
              <Link
                style={currentTab(history, '/login')}
                to='/login'
                className='link-header'
              >
                Login
              </Link>
            </li>
          )} */}
          {/* {!state.user ? (
            <li>
              <Link
                style={currentTab(history, '/register')}
                to='/register'
                className='link-header'
              >
                Register
              </Link>
            </li>
          ) : (
            ''
          )} */}
          {state.user && (
            <li>
              <Link
                onClick={handle_signout}
                to='/'
                style={{ color: 'grey' }}
                className='link-header'
              >
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
export default withRouter(Header)
