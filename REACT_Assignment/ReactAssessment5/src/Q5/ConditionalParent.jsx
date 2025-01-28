import React from 'react'

import ConditionalChild from "./ConditionalChild"
function ConditionalParent() {
    const isLoggedIn=true


  
    return (
      <div>
        
        <ConditionalChild isLoggedIn={isLoggedIn} />
        
       
      </div>
    );
  }

export default ConditionalParent