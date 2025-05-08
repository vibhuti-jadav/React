import './App.css'
import Navbar from './component/Navbar'
import Product from './component/Product'
import Products from './utilities/data'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)


  function handleCart(){
    setCount(count+1)
  }

  return (
    <>
      <Navbar len={Products.length} count={count}/>
      <Product data={Products} handleCart={handleCart}/>

    

    </>
  )
}

export default App
