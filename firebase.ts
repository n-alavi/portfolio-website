//import the function you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbkPDDSn2D7zT0JKl6ohlaROVcXUgieUw",
  authDomain: "otp-tutorial-86b30.firebaseapp.com",
  projectId: "otp-tutorial-86b30",
  storageBucket: "otp-tutorial-86b30.appspot.com",
  messagingSenderId: "299931969685",
  appId: "1:299931969685:web:969aa4abd89813bd4c539c",
};

//initializa Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
