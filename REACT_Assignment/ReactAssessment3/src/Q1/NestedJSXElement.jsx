import React from 'react'

function NestedJSXElement() {
const title = "Understanding JSX";
const content = "JSX allows you to write HTML in React.";
const tags = ["React", "JavaScript", "JSX"];
  return (

    <div>
        <h1>{title}</h1>
        <p>{content}</p>
        <ol>
            {tags.map((element)=>{
                return <li>{element}</li>
            })}
        </ol>
    </div>
  )
}

export default NestedJSXElement