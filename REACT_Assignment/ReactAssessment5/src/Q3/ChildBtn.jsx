import React from 'react'

function ChildBtn({fn}) {
   
  return (
    <div>

        <button onClick={fn} style={{padding:"10px",backgroundColor:"red",color:"white",fontSize:"17px"}}>
            Clickme
        </button>
    </div>
    
  )
}

export default ChildBtn