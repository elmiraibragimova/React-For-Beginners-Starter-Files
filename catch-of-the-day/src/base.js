import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAVuBy4a5a_bdJe5mkvaBn2RN1kgod_2Ds',
  authDomain: 'catch-of-the-day-elmira.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-elmira.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
