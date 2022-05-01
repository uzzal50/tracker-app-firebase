import React from 'react'
import styles from './Home.module.css'

const TransactionList = ({ transactions }) => {
  console.log(transactions)
  if (transactions.length === 0) {
    return (
      <>
        <h4 style={{ marginBottom: '1rem' }}>Transcation List</h4>
        <h4>Add transactions to appear in this List.</h4>
      </>
    )
  } else {
    return (
      <div className={styles.listTransactions}>
        <h4>Transcation List</h4>
        <ul className={styles.listsul}>
          {transactions.map((doc) => {
            return (
              <li key={doc.id}>
                <p>{doc.name.charAt(0).toUpperCase() + doc.name.slice(1)}</p>
                <p>Rs {doc.amount}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TransactionList
