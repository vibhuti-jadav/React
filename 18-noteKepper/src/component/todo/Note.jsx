import React from 'react'
import NoteInput from './NoteInput'
import NoteList from './NoteList'
import { ToastContainer } from 'react-toastify'
import Navbar from './Navbar'

const Note = () => {
  return (
    <>  
    <Navbar/>
    <NoteInput/>
    <NoteList/>
    <ToastContainer/>
    </>
  )
}

export default Note