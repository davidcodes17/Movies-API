import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA0-w3Nz76STttFympBgB-d-4mJESEO8aU",
  authDomain: "dc-movieapi.firebaseapp.com",
  projectId: "dc-movieapi",
  storageBucket: "dc-movieapi.appspot.com",
  messagingSenderId: "910183453431",
  appId: "1:910183453431:web:39d2e8d7b6b0615ce239f2",
};

const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();
export { firebaseAuth, provider };
