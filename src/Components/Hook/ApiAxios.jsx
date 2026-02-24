import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function ApiAxios() {
    const [data ,setData] = useState([]);

    const handlefetch =()=>{
    axios.get('https://dummyjson.com/quotes')
    .then((res)=>{
     console.log(res.data.quotes)
     setData(res.data.quotes)
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
         <h1>{item.quote}</h1>
          <h1>{item.author}</h1>
        </>  
        )
      })}
    </div>
  )
}
