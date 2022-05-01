import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDZs2igwqRjoe8b2XqxjGm2JEVTd1myVWQ',
  authDomain: 'mymoney-e7883.firebaseapp.com',
  projectId: 'mymoney-e7883',
  storageBucket: 'mymoney-e7883.appspot.com',
  messagingSenderId: '88996068979',
  appId: '1:88996068979:web:01106ad90bff7930d6f406',
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()

//init auth
const projectAuth = firebase.auth()

//timestamps
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
