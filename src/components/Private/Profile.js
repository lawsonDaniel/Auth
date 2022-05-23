import React from 'react'


const Profile = ({logout}) => {
   
  const container ={
    display:"flex",
    flexWrap:'wrap'
  }
  
  const sidebar = {
    background:'#111',
    padding:'10px',
    width:'20vw',
    flex:'1',
    height:'100vh'
  }
  const mainbar = {
    background:'#999',
   flex:'4',
    height:'100vh'
  }


  return (
      
    <div style={container}>
         <div style={sidebar}>
           <div>sidebar</div>
           <div><button onClick={logout}>logout</button></div>
         </div>
         <div style={mainbar}>
           <h3>{`email ${localStorage.getItem('login')}`}</h3>
         </div>
    </div>
  )
}

export default Profile