import React from 'react'
import Products from '../components/Products'

const Product = ({data, addCart}) => {
  return (
    <div>
        <Products  data={data} addCart={addCart}/>
     
    </div>
  )
}

export default Product