import React from 'react'
import ChildBtn from './ChildBtn'

function ParentBtn() {
    const btnclick=()=>{
        console.log("button clicked");
        // alert("");
    }
  return (
    <div>
        <ChildBtn fn={btnclick}/>
    </div>
  )
}

export default ParentBtn