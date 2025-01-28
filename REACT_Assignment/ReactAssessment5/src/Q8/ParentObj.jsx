import React from 'react'
import ChildObj from './ChildObj'
function ParentObj() {
    const user={name:"Bob",age:"30"}
  return (
    <div>
        <ChildObj data={user}/>
    </div>
  )
}

export default ParentObj