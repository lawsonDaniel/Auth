import React from 'react'

const Sidebar = ({logout}) => {
     
  const sidebar = {
    background:'rgb(217 217 217',
    padding:'20px',
    flex: '0 1 2%',
    height:'100vh',
    color:'#333'
  }
  const button = {
    cursor: 'pointer'
  }
  return (
    <>
         <div style={sidebar}>
           <div>
          <span style={button} onClick={logout} className="material-icons">
          logout
          </span>
    </div>
         </div> 
    </>
  )
}

export default Sidebar