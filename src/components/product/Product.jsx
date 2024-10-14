import React from 'react'
import "./product.css"

const Product = () => {
  return (
    <div className='product'>
        <div className='img'>image</div>
        <h4 className='product-name'>product Name</h4>
        <p className='product-p'>thi is some info about product</p>
        <button className='product-btn'>Add to cart</button>
    </div>
  )
}

export default Product