import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyDn3ZjticYWI64Ade2zdNoUbptLkKbIlh4',
  authDomain: 'vue-project-17339.firebaseapp.com',
  projectId: 'vue-project-17339',
  storageBucket: 'vue-project-17339.appspot.com',
  messagingSenderId: '509165701301',
  appId: '1:509165701301:web:4789a6b6435c7f6e2a56fc',
  measurementId: 'G-YSMCD3EC03'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
export default db
