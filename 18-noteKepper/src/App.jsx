
import { useContext } from 'react'
import './App.css'
import Note from './component/todo/Note'
import { TodoContext } from './context/TodoContext'

function App() {

  const {setTheme} = useContext(TodoContext)
  return (
    <>


  
       <div className="max-w-xl my-40  border  border-slate-400 rounded-2xl shadow shadow-blue-950 p-4 mx-auto">
      <Note/>

      </div>
    </>
  )
}

export default App
