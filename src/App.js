import { Login } from "./components/Login";
import { Route, Routes, useNavigate} from 'react-router-dom'
import Register from "./components/Register";
import Notfound from './Notfound'
import { useState } from "react";
import Home from "./Home";
import { app } from "./conn/fire_base_config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Profile from "./components/Profile";


function App() {
  const [error, seterror] = useState('');
  const [sucessfull, setsucessfull] = useState('');
  const [islogin, setislogin] = useState(false)
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
        setTimeout(()=> seterror('') , 5000);
        
      
      setsucessfull('User sucessfully created, you would be redirected to the login page now')
      // when user has signed in sucessfull redirect to login page
        const clearSucessAndRedirect = ()=>{
          seterror('')
          navigate("/Login", { replace: true });
          setsucessfull('')
        }
        //run the clear sucess and redirect function after 5seconds
        setTimeout(clearSucessAndRedirect , 5000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterror(errorMessage)
         setTimeout(()=> seterror('') , 5000);
      
        // ..
      });
  }
  
    const login = (detail)=>{
    let userEmail = detail.email
     let userPassword = detail.password
      const auth = getAuth();
signInWithEmailAndPassword(auth, userEmail, userPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    seterror('')
    setsucessfull('User Login sucessfull')
    const clearSucessAndRedirect = ()=>{
      navigate("/Profile", { replace: true });
      setsucessfull('')
    }
    //go to the profile page and clear the sucess message
    setTimeout(clearSucessAndRedirect,2000)

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   
    seterror(errorMessage)
    setsucessfull('')
    const clearSucessAndRedirect = ()=>{
      seterror('')
    }
    //go to the profile page and clear the sucess message
    setTimeout(clearSucessAndRedirect,5000)
  });

      
    }

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Login login={login} error={error} sucessfull={sucessfull} seterror={seterror} />}></Route>
        <Route exact path="/Profile" element={<Profile/>} ></Route>
        <Route path="/Register" element={<Register error={error} sucessfull={sucessfull} seterror={seterror}  onSubmit={reg}/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
     
    
    </>
  );
}

export default App;
