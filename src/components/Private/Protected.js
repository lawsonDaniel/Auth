import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Protected = ({islogin,children}) => {
let navigate = useNavigate();  
    
  
  return (
    <div>
    {   useEffect(() => {
     return(
        islogin === true ? children : navigate("/Login", { replace: true })
     )
    },[]) }
    </div>
  )
}

export default Protected