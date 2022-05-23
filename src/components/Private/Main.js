import React from 'react'
import Box from './Box'
const Main = () => {
    const mainbar = {
        background:'#fff',
        flex:'1',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        padding: '20px'
      }
    
      const profileContainer ={
        display:'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr',
        gridGap:'10px'
    }
 
  return (
    <>
   
    <div style={mainbar}>
            <h1 style={{fontFamily: 'Macondo, cursive'}}>Dashboard</h1>
           {/* <h3>{`email ${localStorage.getItem('email')}`}</h3> */}
            <div style={profileContainer}>
             <Box />
             <Box />
             <Box />
             <Box />
             
            </div>
         </div>
    </>
  )
}

export default Main