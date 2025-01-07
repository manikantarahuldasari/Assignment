import React from 'react'
function FilteredList({numbers}) {
    
    const filterednum=numbers.filter((num)=>num>5)
    // console.log(filterednum)
  return (
    <div>
        
          <ul style={{listStyleType: "none"}}>  

    {        filterednum.map((finalnums,index)=>{
        return(
           <li>{finalnums}</li>
        )
        })
    }       
        </ul>
    </div>
  )
}

export default FilteredList