import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link to='/'>Tracker</Link>
        </li>

        {!user && (
          <>
            {' '}
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </>
        )}
        {user && (
          <>
            <li>
              Hello,{' '}
              {user.displayName.charAt(0).toUpperCase() +
                user.displayName.slice(1)}
            </li>

            <button className='btn' onClick={logout}>
              <li> Logout</li>
            </button>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
