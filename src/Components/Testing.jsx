import React from 'react'

export default function Testing() {
    const mystyle = {
        color:'blue',
        backgroundColor:'pink'
    }

  return (
    <div>
      
      <h3 style={{color:"red", border:'2px red dashed'}}>INLINE CSS</h3>

      <h4 style={mystyle}>INTERNAL CSS</h4>
    </div>
  )
}