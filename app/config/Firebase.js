import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import AsyncStorage from "@react-native-async-storage/async-storage"; 

const firebaseConfig = {
    apiKey: "AIzaSyA1uOi9KXm8pgASXll7ZSoSw0fQIBITQGU",
    authDomain: "test-auth-20d6a.firebaseapp.com",
    projectId: "test-auth-20d6a",
    storageBucket: "test-auth-20d6a.appspot.com",
    messagingSenderId: "132754062477",
    appId: "1:132754062477:web:6e180655e0f9e17bcbb6c4",
    measurementId: "G-TMTYZWMEV1"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app, { persistence: 'local', AsyncStorage: AsyncStorage });
  const firestore = getFirestore(); // Initialize Firestore with the Firebase app
  export { firestore };
  


  export { auth};


  export const FIREBASE_APP = initializeApp(firebaseConfig);
  export const FIRESTORE_DB = getFirestore(app);