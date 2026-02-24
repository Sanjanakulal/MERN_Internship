import React, { useState } from 'react'

export default function HookUseState() {
    //syntax
    //const[state,setState] =useState()
    let favcolor = "skyblue"

    const handlechange = ()=>{
        
            favcolor ="pink"
            console.log(favcolor)    
    }
    //using useState
    const [color, setColor] = useState("skyblue")

    const handlecolor =()=> setColor("pink")

    //using state handling
   const [details,setDetails]=useState({
    name:"Sanjana",
    course:"BE",
    college:"AJIET"
   })
   

  return (
    <div >
      <h3>my favorite color is {favcolor}</h3>
      <button onClick={handlechange}>change color</button>

      <h3>using useState</h3>
       <h3>my favorite color is {color}</h3>
      <button onClick={handlecolor}>change color</button>

      <h2>using state handling</h2>
      <h3>I am {details.name} currently pursuing {details.course} at {details.college}</h3>
    </div>
  )
}
