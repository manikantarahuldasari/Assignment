import React from 'react'
import { useState } from 'react'

function Counter() {
    var [state,setState]=useState(0)
    function incCreament(){
        setState(state+1)
    }
  return (
    <div className="mt-5"> 
       <h1>Count Value:{state}</h1> 
       <button className="btn btn-success" onClick={incCreament}>IncreaseCount</button>
    </div>
  )
}

export default Counter