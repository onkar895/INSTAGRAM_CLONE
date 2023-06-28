// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyBUNKXRjqHKXEZqBQY6r8Fvl_VJaBR9F8E',

  authDomain: 'instagram-clone-bee95.firebaseapp.com',

  projectId: 'instagram-clone-bee95',

  storageBucket: 'instagram-clone-bee95.appspot.com',

  messagingSenderId: '609020389780',

  appId: '1:609020389780:web:a5d37f503dae4af26fc781',

  measurementId: 'G-0GLCE6W1XB'

}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)
