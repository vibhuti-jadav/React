import './App.css'
import Navbar from './component/Navbar'
import Product from './component/Product'
import Products from './utilities/data'

function App() {

  return (
    <>
      <Navbar len={Products.length}/>
      <Product data={Products}/>

    </>
  )
}

export default App
