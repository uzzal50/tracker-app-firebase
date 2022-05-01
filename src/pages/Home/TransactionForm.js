import React, { useEffect, useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'

const TransactionForm = ({ uid }) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { response, addDocument } = useFirestore('transactions')

  const handleSubmit = (e) => {
    e.preventDefault()

    addDocument({
      uid,
      name,
      amount,
    })
  }
  useEffect(() => {
    if (response.success) {
      setName('')
      setAmount('')
    }
  }, [response.success])
  return (
    <>
      <h4>Add a Transcation</h4>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction Name: </span>
          <input
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </label>
        <label>
          <span>Amount (Rs) : </span>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <button className='btn'>Add Transactions</button>
      </form>
    </>
  )
}
export default TransactionForm
