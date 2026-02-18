import Button from '@mui/material/Button'
import React from 'react'

export default function Arrowfunction() {

    // 1.normal function

    function Myfunction(){
        return(
            <h3>Normal function</h3>
        )
    }

    // 2.Arrow function
    const Arrow=()=>{
        return(
            <>
        <h3>Arrow function using multiple statements</h3>
        <h5>hello</h5>
        </>

        )
    }

    // 3.Arrow function with single statement
    const Singlearrow =()=> <h3>Arrow function with single statements</h3> 
    const Handleclick = ()=> alert("button clicked!!")
    const Handlegreet =(name)=>  alert("HELLO " +name)
       
     return (
    <div>
      <Myfunction/>
      <Arrow/>
      <Singlearrow/>
      <Button variant='contained' onClick={Handleclick}>Click me</Button>
      <Button variant='outlined' onClick={()=>console.log("Hello Good evening")}>Greet</Button>
      <Button onClick={()=>Handlegreet("SANJANA")} >Passing Argument</Button>
     
    </div>
  )
}
