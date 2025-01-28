import React from 'react'
import Child from './Child'
function Parent() {
    const title="Welcome To React"
  return (
    <div>
        <Child message={title}/>
    </div>
  )
}

export default Parent