import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'


const Profile = ({logout,email}) => {
   
  const container ={
    display:"flex",
    flexWrap:'wrap',
    color:'#000'
  }
 
 
  return (
      
    <div style={container}>
        <Sidebar logout={logout}/>
        <Main />
    </div>
  )
}

export default Profile