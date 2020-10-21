import React from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import './Header.css'

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: 'white' }
  } else {
    return { color: 'grey' }
  }
}

const Header = ({ history }) => {
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
            <Link
              style={currentTab(history, '/login')}
              to='/login'
              className='link-header'
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              style={currentTab(history, '/register')}
              to='/register'
              className='link-header'
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default withRouter(Header)
