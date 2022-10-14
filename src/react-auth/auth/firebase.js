// Configure 
import {initializeApp} from "firebase/app"
import { getAnalytics } from "firebase/analytics";

import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAlOcuiAdpc5-BoxErtZmAnOpFpRK2N_Lg",
    authDomain: "reactauth-409d6.firebaseapp.com",
    projectId: "reactauth-409d6",
    storageBucket: "reactauth-409d6.appspot.com",
    messagingSenderId: "232883044910",
    appId: "1:232883044910:web:5d25adad7bebd5d97155bf",
    measurementId: "G-677BHFFRDP"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);

// https://firebase.google.com/docs/auth/web/password-auth
const registerEmailAndPassword = async (email, pass) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, pass);
        console.log(`user ${response.user} has been registered`);
    } catch (error) {
        console.log(`error code ${error.code}`);
        console.log(`error message ${error.message}`);
    }
};

const login = async (email, pass)=>{
    try {
        await signInWithEmailAndPassword(auth, email, pass)
            .then((userCreds)=>{
                console.log(`user ${userCreds.user} login successfully!`);
            })
    } catch (error) {
        console.log(`error code ${error.code}`);
        console.log(`error message ${error.message}`);
    }
};

const resetPassword = async (email) => {
    // Dokumentasi: https://firebase.google.com/docs/reference/js/auth.md#sendpasswordresetemail
    try {
      await sendPasswordResetEmail(auth, email);
  
      console.log("Password has been reset successfully!");
    } catch (err) {
      console.log(err);
    }
};

const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };
  
  // Export seluruh fungsi yang dibuat + auth
  export {
    auth, // Nanti akan digunakan untuk hooks react-hooks-firebase
    registerEmailAndPassword,
    login,
    resetPassword,
    logOut as signOut,
  };
  