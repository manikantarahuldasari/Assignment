import React from 'react'
import MultiChild from './MultiChild'
function MultipleProps() {
    const firstname="John"
    const lastname="Doe"
  return (
    <div>
        <MultiChild firstname={firstname} lastname={lastname}/>
    </div>
  )
}

export default MultipleProps