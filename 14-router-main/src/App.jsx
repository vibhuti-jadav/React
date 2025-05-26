
import { useEffect, useState } from 'react'
import NavbarExample from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import Contact from './components/Contact'
import { Routes, Route } from 'react-router'
import User from './components/User'

function App() {

  

  return (
    <>

<NavbarExample/>

<Routes>
  <Route path="/" element={ <Home/>} />
  <Route path="/about" element={ <About/>} />
  <Route path="/users" element={ <Users/>} />
  <Route path="/contact" element={ <Contact/>} />
  <Route path="/user/:userId" element={ <User/>} />
</Routes>
      </>


  )
}

export default App