import React from 'react'
import FilteredItems from"../Q2.4/FilteredItems.json"
function FilterItems() {

  return (
    <div>{FilteredItems.filter((items)=>
        items.price>50).map((items)=>(
           
               <div>
                <p>{items.name}:${items.price}</p>
                </div>
               
        ))
        

    }
    
    </div>
  )
}

export default FilterItems