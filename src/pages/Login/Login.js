import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import styles from './Login.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, isLoading, login } = useLogin()
  const submitHandler = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <form className={styles['login-form']} onSubmit={submitHandler}>
      <h3>Login</h3>
      <label>
        <span>Email : </span>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>Password : </span>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {!isLoading && <button className='btn'>Login</button>}
      {isLoading && (
        <button className='btn' disabled>
          loading..
        </button>
      )}
      {error && (
        <p style={{ color: 'var(--error-clr)', margin: '1rem 0' }}>{error}</p>
      )}
    </form>
  )
}

export default Login
