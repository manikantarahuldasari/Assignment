import React from 'react'
import "./GridLayout.css"
function GridLayout() {
    const products = ["Laptop", "Smartphone", "Tablet", "Smartwatch","Camera"];
  return (
    <div className='grid-container'>
        <div className='grid-item1'>{products[0]} </div>
        <div className="grid-item2">{products[1]}</div>
        <div className="grid-item3">{products[2]}</div>  
        <div className="grid-item4">{products[3]}</div>
        <div className="grid-item5">{products[4]}</div>
   </div>
  )
}

export default GridLayout