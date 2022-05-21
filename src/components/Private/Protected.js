import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Protected = ({islogin,Profile}) => {
   
    
    let navigate = useNavigate(); 
  return (
    <div>
    {   useEffect(() => {
     return(
        islogin === true ? Profile : navigate("/Login", { replace: true })
     )
    },[]) }
    </div>
  )
}

export default Protected