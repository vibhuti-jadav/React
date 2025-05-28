
import { useEffect, useState } from 'react'
import NavbarExample from './components/Navbar'
import About from './components/About'
import  Users  from './components/Users'
import Contact from './components/Contact'
import { Routes, Route, useNavigate, useLocation } from 'react-router'
import User from './components/User'
import Login from './components/Login'
import Home from './components/home'

function App() {
  const [log, setLog] = useState({email:"", password:""})

  const navigate = useNavigate()
  const location =useLocation()
  

    function handleChange(e){
        const {name, value} = e.target
        setLog({
            ...log,
            [name]:value
        })
    }

    function handleLogin(){
      if(log.email == "demo@gmail.com" && log.password=="123")
      {
        alert("logged Successfully")
        navigate("/home")
      }
    }
    const hideNavbar = location.pathname == "/"

  return (
    <>
    {!hideNavbar && <NavbarExample/>}


        <Routes>
          <Route path="/home" element={ <Home/>} />
          <Route path="/" element={ <Login handleChange={handleChange} handleLogin={handleLogin} />} />
          <Route path="/about" element={ <About/>} />
          <Route path="/users"  element={ <Users />} />
          <Route path="/contact" element={ <Contact/>} />
          <Route path="/user/:userId" element={ <User/>} />
        </Routes>

      </>


  )
}

export default App