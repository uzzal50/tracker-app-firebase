import { useEffect, useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { projectAuth } from '../firebase/config'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)
    setIsLoading(true)

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)
      console.log(res)
      dispatch({ type: 'LOGIN', payload: res.user })

      //update state
      setIsLoading(false)
      setError(null)
    } catch (error) {
      console.log(error.message)
      setError(error.message)
      setIsLoading(false)
    }
  }

  return { error, isLoading, login }
}
