import React from 'react'
// import "../Q11/Todolist.css"
import { useState } from 'react'
const LoginForm=() =>{
    const[state,setState]=useState([])
    const[name,setName]=useState("")
    const addName = () => {
        if (name.trim()) {
            setState([...state, name]);
            setName("");
        }
    }
    const removeTask = (index) => {
        const updatedTasks = state.filter((_, i) => i !== index);
        setState(updatedTasks);
    };
  return (
    <div>
        <div>

        <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)} />
                    <input type="password" placeholder='password' />
        <button onClick={addName}>Submit</button>
                    </div>
        
        <ul style={{ marginTop: "20px", listStyleType: "none", padding: 0 }} className="list">
                {state.map((ele,index) => (
                    <li key={index}>
                        <span>{ele}</span>
                        
                    </li>
                ))}
            </ul>
    
        
    </div>
  )
}

export default LoginForm