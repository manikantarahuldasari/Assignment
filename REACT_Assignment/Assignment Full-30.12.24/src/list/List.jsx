import React from 'react'

function List() {
    var elements=['Apple', 'Banana', 'Cherry']
  return (
    <div className='mt-5'>
        <ol>

        {elements.map(function(items){
            return <li>{items}</li>
        })
            
        }
        </ol>
    </div>
  )
}

export default List