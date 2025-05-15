import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRefContext } from '@react-navigation/stack';
import { initializeApp } from 'firebase/app';
import {getAuth, initializeAuth,getReactNativePersistence} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCi2WaMErX5iPMkolFXnUMbYqkD2ZMD3kk",
    authDomain: "smart-e-commerce-app-59142.firebaseapp.com",
    projectId: "smart-e-commerce-app-59142",
    storageBucket: "smart-e-commerce-app-59142.firebasestorage.app",
    messagingSenderId: "168800075592",
    appId: "1:168800075592:web:bff2d09aba5913fa8b7d7d"
};

const app = initializeApp(firebaseConfig);
initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
})
const auth=getAuth(app)
const db=getFirestore(app)
export {auth,db}
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
