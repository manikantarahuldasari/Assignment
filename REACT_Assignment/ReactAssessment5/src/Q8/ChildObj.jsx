import React from 'react'

function ChildObj({data}) {
  return (
    <div>
        <h1>Name:{data.name}</h1>
        <h1>Age:{data.age}</h1>
    </div>
  )
}

export default ChildObj