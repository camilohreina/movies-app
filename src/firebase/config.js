
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAjYsyJrsXzxJ53mU0woRDYRsazuhpTSXc",
    authDomain: "movies-app-30a38.firebaseapp.com",
    projectId: "movies-app-30a38",
    storageBucket: "movies-app-30a38.appspot.com",
    messagingSenderId: "361727722697",
    appId: "1:361727722697:web:eb50e81744fa5ea91bf918"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);