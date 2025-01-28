import React, { useEffect } from 'react'

function ChildAddItem({items,addItem}) {
    useEffect(()=>{
        if(!items.includes("TypeScript")){
            addItem("TypeScript")
        }
    },[items,addItem])
    // var res= 
  return (
    <div>
       
        
    </div>
  )
}

export default ChildAddItem