import React from 'react'

function Captalize({words}) {
  return (
    <div>{
        words.map((word)=>{
            return ( <li>
                {word.charAt(0).toUpperCase()+word.slice(1)}
                </li>)
        })
        }
        
        </div>
  )
}

export default Captalize