

import './App.css'
import NavbarExample from './components/Navbar'
import { Routes, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Users from './components/Users'
import User from './components/user'



function App() {

  

  return (
    <>
    <NavbarExample/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/user/:userId" element={ <User/>} />

    </Routes>
    
    
    </>
  )
}

export default App
