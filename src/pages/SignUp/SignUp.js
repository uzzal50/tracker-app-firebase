import { useState } from 'react'
import { useSignup } from '../../hooks/useSignUp'
import styles from './SignUp.module.css'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')

  const { error, isPending, signup } = useSignup()

  const submitHandler = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
  }
  return (
    <form className={styles['signup-form']} onSubmit={submitHandler}>
      <h3>SignUp</h3>
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
      <label>
        <span>Username: </span>
        <input
          type='text'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>
      {!isPending && <button className='btn'>SignUp</button>}

      {isPending && (
        <button className='btn' disabled>
          Loading...
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  )
}

export default SignUp
