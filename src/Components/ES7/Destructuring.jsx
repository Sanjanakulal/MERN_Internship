import React from 'react'

export default function Destructuring() {
  const number = [1,2,3,4,5,6]
  const [a,b,c,d,e,f] = number
  const [,,,,g] =number
  const num4=number[5]

  //  const Student = [
  //       {
  //           name: "user1",
  //           email: "user1@example.com",
  //           phone:"8976543567",
  //           address:"mangalore"
           
  //       }
  //   ]
 
  const Student = [
    {
      name: "user1",
      email: "user1@example.com",
      phone: "8976543567",
      address: "mangalore"
    },
    {
      name: "user2",
      email: "user2@example.com",
      phone: "9876543210",
      address: "udupi"
    }
  ]

   // const {name,email,phone,address} =Student[0]
  return (
    <div>
      {d},{f},{a},
      {g},
      {num4}
    
{/*    
    {Student.map((data)=>(
       <>
       <h3>{data.name}</h3>
       <h3>{data.email}</h3>
       <h3>{data.phone}</h3>
       <h3>{data.address}</h3>
    
    </>
    ))} */}
    {Student.map(({name, email, phone, address}) => (
  <>
    <h3>{name}</h3>
    <h3>{email}</h3>
    <h3>{phone}</h3>
    <h3>{address}</h3>
  </>
))}
    </div>
  )
}
