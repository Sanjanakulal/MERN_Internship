import React from 'react'

export default function Ternaryoperator() {
    const score = 78;
  return (
    <div>
      {score>=80?<div style={{color:"red",backgroundColor:"yellow"}}>'Grade A'</div>: 
      score>=70?<div style={{color:"blue",backgroundColor:"pink"}}>'Grade B'</div>:
      score>=40?<span style={{color:"viloet",backgroundColor:"yellow"}}>'Grade C'</span>:<span style={{color:"red",backgroundColor:"skyblue"}}>'Grade F'</span>}
    </div>
  )
}
