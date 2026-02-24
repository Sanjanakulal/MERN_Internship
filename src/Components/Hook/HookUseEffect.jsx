import React, { useEffect, useState } from 'react'

export default function HookUseEffect() {
    //Syntax
    // useEffect(cb ,[])
    // cb =callback function
    // [] = dependency

    const[count,setCount] = useState(0)
    // with dependency
    //  useEffect(()=>{
    //     setCount((numcount)=>numcount+1)
    // },[])

    useEffect(()=>{
        setTimeout(()=>{
        setCount((numcount)=>numcount+1)
    },5000);
    })
  return (
    <div>
      <h3>I have rendered {count} times</h3>
    </div>
  )
}
