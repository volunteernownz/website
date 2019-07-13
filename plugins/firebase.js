import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyDvqDxlV7RZSlogT3Bt11vC0gfWrKU0bmg",
    authDomain: "volunteernownz.firebaseapp.com",
    databaseURL: "https://volunteernownz.firebaseio.com",
    projectId: "volunteernownz",
    storageBucket: "volunteernownz.appspot.com",
    messagingSenderId: "675455265772",
    appId: "1:675455265772:web:03a4c8f975754165"
  }
  firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
export {fireDb}

