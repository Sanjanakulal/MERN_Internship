import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0)
    const handleincrement = () => setCount(count + 1)
    const handledecrement = () => setCount(count - 1)
    const handlereset = () => setCount(0)
    
      const btnStyle = {
    margin: "5px",
    padding: "6px 12px",
    backgroundColor: "lightblue",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>Count: {count}</h2>
             <button style={btnStyle} onClick={handleincrement}>Increment</button>
            <button style={btnStyle} onClick={handledecrement}>Decrement</button>
            <button style={btnStyle} onClick={handlereset}>Reset</button>
        </div>
    )
}
