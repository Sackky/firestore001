import firebase from 'firebase/app'
import 'firebase/firestore'
// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyCXTnUqXIdAdGtF8OpKCdzTpg-ozhjc4pM',
    authDomain: 'fir-001-f15a1.firebaseapp.com',
    databaseURL: 'https://fir-001-f15a1.firebaseio.com',
    projectId: 'fir-001-f15a1',
    storageBucket: 'fir-001-f15a1.appspot.com',
    messagingSenderId: '962909672955',
    appId: '1:962909672955:web:1ca445c7a80728d22ee75e',
    measurementId: 'G-ZLER6CE37H'
  }
  firebase.initializeApp(firebaseConfig)
}
export const db = firebase.firestore()
