import React,{useState} from 'react'
import InputChild from './InputChild'
function InputParent() {
    const[inputvalue,setinputvalue]=useState("")
    const handleInputFromChild=(input)=>{
        setinputvalue(input)
    }
  return (
    <div>
      <p> YouTyped: {inputvalue}</p>
      <InputChild tochild={handleInputFromChild}/>
    </div>
  )
}

export default InputParent