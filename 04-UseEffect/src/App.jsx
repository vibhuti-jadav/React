
import { useEffect, useState } from 'react'
import './App.css'



function App() {

  const [todo, setTodo] = useState([])
  const [to, setTo] = useState("")


  function handleTodo(){
 
    let obj = {
      id: Math.round(Math.random()*1000) ,
      task : to,
      status:false
    }



    setTodo([...todo, obj])

  
  }


  function handleUpdate(id){


     let newTodo = todo.map((ele)=> ele.id == id ? {...ele, status: !ele.status} : ele)

      setTodo(newTodo)


      
  }



  return (
    <>

       <div className='w-5xl m-auto    gap-4 p-4'>

            <div className='flex gap-12'>
    <input type="text" id="small-input" onChange={(e) =>  setTo(e.target.value) } class="block w-3xl p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

    <button type="button" onClick={handleTodo} class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-8 py-3 text-center align-middle me-2 mb-2">Add</button>

</div>
       
       </div>

       <div className='bg-cyan-900 rounded w-2xl my-5 gap-5 flex flex-col mx-auto'>
        {
          todo.map((ele) => (
              <div key={ele.id} className='flex gap-x-50 p-3'>
                  <h3 className='font-bold pl-2  text-2xl'>{ele.task}</h3>
                  <button className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center p-2 rounded-md' onClick={() => handleUpdate(ele.id)}  >{ele.status ? "Completed" : "not Completed" }</button>
        
            <button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Delete</button>

            </div>
            
            
          ))
        }
      
       </div>



       

    </>
  )
}

export default App