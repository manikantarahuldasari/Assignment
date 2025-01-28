import React from 'react'
import ChildData from './ChildData'
function GrandData() {
    const data="Hello"
  return (
    <div>
        <ChildData data={data}/>
    </div>
  )
}

export default GrandData