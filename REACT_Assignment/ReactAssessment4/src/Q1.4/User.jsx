import React from 'react'
import UserDetails from"./UserDetails.json"
function User() {
  return (
    <div>
       <ol>
    {
        UserDetails.map((element,index)=>{
            return(
                <li >
                    {element.name}
                </li>
                
            )
        })
    }
        </ol> 
    
    </div>
  )
}

export default User