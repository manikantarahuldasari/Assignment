import React from 'react'
import { useState } from 'react'
function InputChild({tochild}) {
    const[state,setState]=useState("")
    const input=()=>{
        tochild(state)
        
    }
  return (
    <div>
        <input type="text"  value={state} onChange={(e)=>setState(e.target.value)}/>
        <button  onClick={input}>Click To Display</button>
    </div>
  )
}

export default InputChild