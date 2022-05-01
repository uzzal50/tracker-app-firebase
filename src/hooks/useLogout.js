import { useEffect, useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { projectAuth } from '../firebase/config'

export const useLogout = () => {
  const [iscancel, setIsCancel] = useState(false)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const logout = async () => {
    setError(null)
    setIsLoading(true)

    try {
      await projectAuth.signOut()
      dispatch({ type: 'LOGOUT' })
      //update state
      if (!iscancel) {
        setIsLoading(false)
        setError(null)
      }
    } catch (error) {
      if (!iscancel) {
        console.log(error.message)
        setError(error.message)
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancel(true)
  }, [])

  return { error, isLoading, logout }
}
