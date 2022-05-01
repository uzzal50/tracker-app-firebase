import React from 'react'
import styles from './Home.module.css'
import { useFirestore } from '../../hooks/useFirestore'

const TransactionList = ({ transactions }) => {
  const { deleteDocument } = useFirestore('transactions')
  if (transactions.length === 0) {
    return (
      <>
        <h4 style={{ marginBottom: '1rem' }}>Transcation List</h4>
        <h4 style={{ color: 'var(--error-clr)' }}>
          Add transactions to appear in this List.
        </h4>
      </>
    )
  } else {
    return (
      <div className={styles.listTransactions}>
        <h4>Transcation List</h4>
        <ul className={styles.listsul}>
          {transactions.map((doc) => {
            return (
              <li
                key={doc.id}
                className={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                <div>
                  <p>{doc.name.charAt(0).toUpperCase() + doc.name.slice(1)}</p>
                  <p>Rs {doc.amount}</p>
                </div>

                <button
                  className='btn'
                  style={{ marginLeft: 'auto' }}
                  onClick={() => deleteDocument(doc.id)}
                >
                  Delete
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TransactionList
