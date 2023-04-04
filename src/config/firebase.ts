import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDioNcj_MCJmDDRfwqCwUBD-8SJqIaZfew",
    authDomain: "tok-tok-4aee3.firebaseapp.com",
    projectId: "tok-tok-4aee3",
    storageBucket: "tok-tok-4aee3.appspot.com",
    messagingSenderId: "217576195321",
    appId: "1:217576195321:web:4b451fed38291288840e28"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;