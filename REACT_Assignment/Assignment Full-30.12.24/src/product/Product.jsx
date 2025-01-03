import React from 'react'

function Product({name,price}) {
    var prod={
        product:"Laptop",
        price:"1000"
    }
  return (
    <div className='mt-5'>
        <h1>product:{prod.product}-${prod.price}</h1>
        </div>
  )
}

export default Product