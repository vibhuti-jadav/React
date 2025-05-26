
import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Products from './components/Products'

import products from "./utilities/data"
import Cart from './components/Cart'
import { BrowserRouter, Route, Router, Routes } from 'react-router'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import About from './Pages/About'
import Login from './Pages/Login'


function App() {

  const [cart, setCart] = useState([])
  const [auth, setAuth] = useState({})

  const logo = {
    img:"https://flowbite.com/docs/images/logo.svg",
    text: "flowbite"
  }
  
  
  function setLocal(newCart){
    localStorage.setItem("cart", JSON.stringify(newCart))
    getCart()
  }

  function getCart(){
   const newCart = JSON.parse(localStorage.getItem("cart"))

   setCart(newCart)
  }



  useEffect(()=>{
    getCart()
  }, [])


  useEffect(()=>{
    let newAuth = JSON.parse(localStorage.getItem("auth"))
    setAuth(newAuth)
  }, [])

  function addCart(obj){


    let newCart = cart;

    newCart.push(obj)
    // let newObj = cart.find((ele) => ele.title == obj.title)
    // if(newObj){
    // let newCart= cart.map((ele) => ele.title == newObj.title ? {...ele, qtn:ele.qtn++} : ele)
    // setCart(newCart)
    // }
    // else{
    //   setCart([...cart, {...obj, qtn:1}])
    // }

    setLocal(newCart)

  }
  console.log(cart)


  return (
    <>

    {/* <Products data={products} addCart={addCart}/>

<Cart cart={cart}/> */}

<BrowserRouter>
{

    auth &&  <Navbar  logo={logo} len={cart.length} setAuth={setAuth}/>
}



  <Routes>
    <Route path="/" element={<Login  setAuth={setAuth}/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/product" element={<Product  data={products} addCart={addCart}/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/cart" element={<Cart  cart={cart}/>}/>
  </Routes>

</BrowserRouter>


<h1 >big</h1>

    </>
  )
}

export default App