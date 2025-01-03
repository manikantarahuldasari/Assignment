import React from 'react'

function DynamicTable() {
    const data = [
        { name: "Alice", age: 25, location: "New York" },
        { name: "Bob", age: 30, location: "San Francisco" },
        { name: "Charlie", age: 35, location: "Los Angeles" }
        ];
  return (
    <div>
        <table align="center"    frame="box" rules="all">
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
            </thead>
            <tbody>
                
                    {data.map((items)=>(
                        <tr>
                        <td>{items.name}</td>
                        <td>{items.age}</td>  
                        <td>{items.location}</td>          
                        </tr> 
                    ))}
                
            </tbody>
        </table>
      
    </div>
  )
}

export default DynamicTable