import { Login } from "./components/Login";
import { Route, Routes, useNavigate} from 'react-router-dom'
import Register from "./components/Register";
import Notfound from './Notfound'
import { useState } from "react";
import Home from "./Home";
import { app } from "./conn/fire_base_config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import Profile from "./components/Private/Profile";



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
    console.log(user)
    seterror('')
    
    setsucessfull('User Login sucessfull')
    localStorage.setItem('login',user.uid)
    const clearSucessAndRedirect = ()=>{
      navigate("/Profile", { replace: true });
      setsucessfull('')
      localStorage.setItem('email',user.email)
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
//logout users
const logout = ()=>{
  
const auth = getAuth();
signOut(auth).then(() => {
  // // Sign-out successful.
  //delect iuser from  local storage
  localStorage.removeItem('login')
  localStorage.removeItem('email')
  //navigate to the login page
  navigate("/login",{replace:true})

}).catch((error) => {
  // An error happened.
})
}
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Login" element={<Login login={login} error={error} sucessfull={sucessfull} seterror={seterror} />}></Route>
         <Route exact path={localStorage.getItem('login') ? '/Profile' : '/'}  element={localStorage.getItem('login') ? <Profile logout={logout} /> : <Login />} > </Route>
        <Route path="/Register" element={<Register error={error} sucessfull={sucessfull} seterror={seterror}  onSubmit={reg}/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
     
    
    </>
  );
}

export default App;
