import React, { useContext } from 'react'
import './App.css'
import Button from './components/Button'
import {CountContext} from './context/CreateContextProvider'

function App() {

const {count} = useContext(CountContext)

console.log(count)
  return (
    <>

      <div className='mx-auto mt-15 max-w-xl  shadow-blue-950 shadow-2xl rounded-2xl p-2 pl-3'>

      <h1 ><span>Count:-</span><span class="bg-indigo-100 text-indigo-800 text-lg font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-indigo-900 dark:text-indigo-300">{count}</span></h1>
      <Button ></Button>
      
      </div>
    </>
  )
}

export default App
