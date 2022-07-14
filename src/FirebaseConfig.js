import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCD9-FX-ZCvHjGFliX8y_DYOvlyRAkPG4o",
    authDomain: "mission-control-center-426db.firebaseapp.com",
    projectId: "mission-control-center-426db",
    storageBucket: "mission-control-center-426db.appspot.com",
    messagingSenderId: "761182405885",
    appId: "1:761182405885:web:fce33411f5d0fb53402a94"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;