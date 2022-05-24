import React from 'react'

const Sidebar = ({logout}) => {
     
  const sidebar = {
    background:'rgb(217 217 217',
    padding:'20px',
    flex: '0 1 2%',
    color:'#333'
  }
  const button = {
    cursor: 'pointer'
  }
  return (
    <>
         <aside style={sidebar}>
           <div>
          <span style={button} onClick={logout} className="material-icons">
          logout
          </span>
          <span>Logout</span>
    </div>
         </aside> 
    </>
  )
}

export default Sidebar