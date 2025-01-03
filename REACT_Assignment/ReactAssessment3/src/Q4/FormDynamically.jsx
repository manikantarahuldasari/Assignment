import React from 'react'

function FormDynamically() {
    const fields = [
        { label: "Username", type: "text", name: "username" },
        { label: "Email", type: "email", name: "email" },
        { label: "Password", type: "password", name: "password" }
        ];
  return (
    <div>
        <form action="">
            {
                fields.map((elements)=>
                    (
                    <label>
                        {elements.label}
                        <input type={elements.type}  name={elements.name}/>           
                    </label>
                    )
                )
            }
        </form>
    </div>
  )
}

export default FormDynamically;