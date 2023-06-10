// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCZQIUkJjeViiUo3ulm3zne6MsHhV3B2vs',
  authDomain: 'honest-finance-b8c54.firebaseapp.com',
  projectId: 'honest-finance-b8c54',
  storageBucket: 'honest-finance-b8c54.appspot.com',
  messagingSenderId: '46606962852',
  appId: '1:46606962852:web:5bac223f5be7280ef35631',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

//custom initialize
export const db = getDatabase(app)
