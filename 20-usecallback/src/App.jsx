import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

   const [count,setcount]=useState(0)
   const [status,setstatus]=useState(false)

 
  


  return (
    <>
      <div className='mx-auto max-w-xl mt-10'>
     <button type="button" onClick={()=>setcount(count+1)} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">count - {count}</button>
     <button type="button" onClick={()=>setstatus(!status)} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{status ? "true":"false"}</button>
    </div>
    </>
  )
}

export default App
