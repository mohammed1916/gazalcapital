import { initializeApp, firebase } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBoZ_pNKzCD1GqJ-LU5A_gXg1jaCmwJxDM",
    authDomain: "gazal-capital.firebaseapp.com",
    databaseURL: "https://gazal-capital-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gazal-capital",
    storageBucket: "gazal-capital.appspot.com",
    messagingSenderId: "486023430592",
    appId: "1:486023430592:web:fabb05e486dfd999a2c825"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase();