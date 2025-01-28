import React,{useState} from 'react'

function ChildValues({onSubmit}) {
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const handlesubmit=(e)=>{
        e.preventDefault()
        onSubmit({name,age})
        setName("")
        setAge("")
    }
  return (
    <div>
        <form action="" onSubmit={handlesubmit}>
            <label htmlFor="">Name:
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </label>
            <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit</button>

        </form>
    </div>
  )
}

export default ChildValues