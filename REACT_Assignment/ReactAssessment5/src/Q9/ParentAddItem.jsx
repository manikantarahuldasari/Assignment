import React, { useState } from 'react'
import ChildAddItem from './ChildAddItem'
function ParentAddItem() {
    const [items,setItems]=useState(["React","JavaScript"])

    const addItem=(newItem)=>{
        setItems((prevItems) => [...prevItems,newItem])
    }
  return (
    <div>
        <p>Items:{items.join(",")}</p>
        <ChildAddItem items={items} addItem={addItem}/>
    </div>
  )
}

export default ParentAddItem