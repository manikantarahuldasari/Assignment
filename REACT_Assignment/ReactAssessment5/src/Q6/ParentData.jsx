import React from 'react'
import GrandData from './GrandData'
function ParentData({data}) {
  return (
    <div>
        <GrandData data={data}/>
    </div>
  )
}

export default ParentData