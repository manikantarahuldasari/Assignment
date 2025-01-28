import React,{useState} from 'react'
import ChildValues from './ChildValues'
function ParentValues() {
    const [formData, setFormData]=useState({name:"",age:""})
     const handleInput=(data)=>{
        setFormData(data)
    }
  return (
    <div>
        <h1>Name:{formData.name},Age:{formData.age}</h1>
        <ChildValues onSubmit={handleInput}/>

    </div>
  )
}

export default ParentValues