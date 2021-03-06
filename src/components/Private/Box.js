import React from 'react'

const Box = ({color,width,content}) => {
         
    const box ={
        width: `${width}`,
        height: '200px',
        boxShadow: '1px 4px 14px #33333352',
        borderRadius: '10px',
        background: `${color}`
      }
     
  return (
    <>
    <div style={box}>
        {content}
    </div>
    </>
  )
}

export default Box