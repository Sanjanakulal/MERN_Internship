import React from 'react'

export default function Spreadoperator() {
    // const array1 =[1,2,3,4,5]
    // const array2 =[6,7,8,9,10]
    // const combinedarray = [...array1,...array2]

    const Person1 =[
       {
            name: "user1",
            email: "user1@example.com",
            phone: 8765342345,
            address: "123 Main St, City, Country"

        }
        
    ]
     const Person2 =[
       {
            name: "user2",
            email: "user2@example.com",
            phone: 8765367345,
            address: "167 Primary state, City, Country"

        }
        
    ]
    const combinedobject = [...Person1,...Person2]
  return (
    <div>
      {/* {combinedarray} */}
      {/* {combinedobject} */}
       {combinedobject.map((data) => (
        <>
                <h3>{data.name}</h3>
                 <h3>{data.email}</h3>
                  <h3>{data.phone}</h3>
                   <h3>{data.address}</h3>

                </>
                  
            ))}
    </div>
  )
}
