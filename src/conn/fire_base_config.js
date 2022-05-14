
import { initializeApp } from "firebase/app";

  const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_KEY}`,
  authDomain: "auth-ca721.firebaseapp.com",
  projectId: "auth-ca721",
  storageBucket: "auth-ca721.appspot.com",
  messagingSenderId: "694265671201",
  appId: "1:694265671201:web:b19e6ac6077a53d2b97d60",
  measurementId: "G-4R7WMLWDST"
};


const app = initializeApp(firebaseConfig);

export default app