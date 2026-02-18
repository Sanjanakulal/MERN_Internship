import React from 'react'
import './style.css'
import image1 from '../assets/wallpaper.jpg'

export default function Firstapp() {
    const mystyle = {
        color:'yellow',
        backgroundColor:'black'
    }

  return (
    <div>
      <h1>My new app</h1>

      <h3 style={{color:"red", border:'2px blue dotted'}}>INLINE CSS</h3>

      <h4 style={mystyle}>INTERNAL CSS</h4>
      <h5 className='myclass'>EXTERNAL CSS</h5>
      <img src={image1} alt="wallpaper" height={500} width={500} />
    </div>
  )
}