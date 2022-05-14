import { Login } from "./components/Login";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from "./components/Register";
import Notfound from './Notfound'
import { useState } from "react";

function App() {
  //setting state for Registration form
  const reg =(userinfo)=>{
        console.log(userinfo)
  }
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Register" element={<Register onSubmit={reg}/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
