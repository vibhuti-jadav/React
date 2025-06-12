
import { useContext } from 'react'
import './App.css'
import Note from './component/todo/Note'
import { TodoContext } from './context/TodoContext'

function App() {

  const {setTheme} = useContext(TodoContext)
  return (
    <>
       <div className="">

       <Note/>
       
      </div>
    </>
  )
}

export default App
