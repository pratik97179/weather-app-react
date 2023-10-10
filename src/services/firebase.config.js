import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: "letstalk-d01ea.firebaseapp.com",
    projectId: "letstalk-d01ea",
    storageBucket: "letstalk-d01ea.appspot.com",
    messagingSenderId: "780334212597",
    appId: "1:780334212597:web:36d66bef4eed3f6c9f2cbc",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);