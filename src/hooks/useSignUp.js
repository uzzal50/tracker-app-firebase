import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  // const [iscancel, setIsCancel] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, displayName) => {
    setError(null) //purano submit lae null gardieko to reset
    setIsPending(true)
    try {
      //signUp
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      )

      if (!res) {
        throw new Error('Could Not complete signup')
      }
      //add display name to User
      await res.user.updateProfile({
        displayName,
      })

      //dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      setIsPending(false)
      setError(null)
    } catch (error) {
      // if (!iscancel) {
      console.log(error.message)
      setError(error.message)
      setIsPending(false)
      // }
    }
  }
  // useEffect(() => {
  //   return () => setIsCancel(true)
  // }, [])

  return { error, isPending, signup }
}
