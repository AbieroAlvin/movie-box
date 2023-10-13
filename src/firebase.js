import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfw4kjkp_bATmok48npPHi5Ds3E8xHw2s",
  authDomain: "movie-box-775e6.firebaseapp.com",
  projectId: "movie-box-775e6",
  storageBucket: "movie-box-775e6.appspot.com",
  messagingSenderId: "164733455827",
  appId: "1:164733455827:web:67d4a576117ec14cb87326",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
