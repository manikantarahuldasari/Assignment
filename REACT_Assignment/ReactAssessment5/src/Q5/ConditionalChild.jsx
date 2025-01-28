
import React from 'react'

function ConditionalChild({isLoggedIn}) {
  return (
    <div style={{marginTop:"20px"}}>{isLoggedIn?"Logged In":"Logged Out"}</div>
  )
}

export default ConditionalChild