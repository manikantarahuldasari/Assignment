import React from 'react'
import "./Product.css"
function Product(product) {
    
  return (
    <div className='container'>
        <img src={product.pImage} alt="" width={"300px"} height={"250px"}/>
            <h1>{product.pName} <br />

            <span>{product.pPrice}</span>
            </h1>
         
        
    </div>
  )
}

export default Product