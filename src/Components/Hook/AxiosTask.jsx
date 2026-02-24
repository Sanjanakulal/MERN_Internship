import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function AxiosTask() {
    const [data ,setData] = useState([]);

    const handlefetch =()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>{
     console.log(res.data.products)

     //setData (used to display on screen)
     setData(res.data.products)
    })
    .catch((error)=>{
    console.log(error)
    })
    }

    useEffect(()=>{
        handlefetch()
    },[])
   

  return (
    
    <div>
      <button onClick={handlefetch}>click</button>
      {data.map((item)=>{
        return(
         <> 
        <h1>{item.id}</h1>
         <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <h1>{item.category}</h1>
         <h1>{item.price}</h1>
        </>  
        )
      })}
    </div>
    
   
  )
}
