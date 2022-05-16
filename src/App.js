import { Login } from "./components/Login";
import { Route, Routes, useNavigate} from 'react-router-dom'
import Register from "./components/Register";
import Notfound from './Notfound'
import { useState } from "react";
import Home from "./Home";
import { app } from "./conn/fire_base_config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function App() {
  const [error, seterror] = useState('');
  const [sucessfull, setsucessfull] = useState('');

  //setting up function to navivage to login
  let navigate = useNavigate();

  //setting state for Registration form
  const reg =(userinfo)=>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userinfo.UserName,userinfo.Password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        //Clear error message
        seterror('')
        setsucessfull('User has been successfully created')
      // when user has signed in sucessfull redirect to login page
        navigate("/Login", { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterror(errorMessage)
      
        // ..
      });
  }
  
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Register" element={<Register error={error} sucessfull={sucessfull} seterror={seterror}  onSubmit={reg}/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
     
    
    </>
  );
}

export default App;
