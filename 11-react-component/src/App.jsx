import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import  Toast from './component/Toast'
import  Offcanvas  from './component/offcanvas'
import  Navbar  from './component/Navbar'
import  Card  from './component/Card'
import  Alert  from './component/Alert'


function App() {

  return (
    <>
    <Navbar/>
    <Toast/>
    <Offcanvas/>
    <Card/>
    <Alert/>
    </>
  )
}

export default App
