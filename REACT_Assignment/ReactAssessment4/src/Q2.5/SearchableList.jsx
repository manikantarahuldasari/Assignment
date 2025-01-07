import React, { useState } from 'react'
import "./SearchableList.css"
function SearchableList() {
    const cities = ["New York", "Los Angeles", "Chicago", "Houston","Phoenix"]
    const[City,setCity]=useState("");
    const Input=(event)=>{
        setCity(event.target.value)
    }
    const filtercity=cities.filter((name)=>
        name.toLowerCase().includes(City.toLowerCase())
    )
  return (
    <div>
        <input type="text" placeholder='search city' value={City} onChange={Input} />
        <ul>
            {filtercity.length>0?(filtercity.map((name,index)=>(
                    <li key={index}>{name}</li>
                ))
                ):(
                <li>no names</li>
                    )
            }
        </ul>
    </div>
  )
}

export default SearchableList