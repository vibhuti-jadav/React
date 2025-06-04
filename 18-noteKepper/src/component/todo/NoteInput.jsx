import { useContext } from "react"
import {TodoContext} from "../../context/TodoContext"



const NoteInput = () => {


    const {handleChange,handleTask,note,UpdateTask,noteid,count,setCount,newinput,setNewinput,handleNote,num,setNum,addNewInput} = useContext(TodoContext)

  return (
         <>

<div className="max-w-md mx-auto mt-8">   
    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">

        
            <input  value={note} onChange={handleChange}  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Notes" required />
    
          <input type="checkbox" 
          onChange={() => { setNum(1); setCount(false)}} 
    //  onClick={addNewInput}
          className="translate-x-[349px] translate-y-[-30px] absolute" />
        {
           ! noteid ?
            <button type="submit" onClick={handleTask} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
            :
             <button type="submit" onClick={UpdateTask} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
         
        }
        
         </div>

          {

          }

         <div>
               {count && (
                  <textarea  
                  value={newinput}  
                  onChange={(e)=>setNewinput(e.target.value)}
              className="shadow m-2 appearance-none border-gray-800 border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Add Todo"
            /> 
             )}

             {
              [...Array(num)].map((ele,index)=> (
                
               <input 
              //  onChange={(e)=>handleNote(e,index)} 
              
               type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

              )
            )
 
             }
  
  
             {!!num && (
          <button
            onClick={addNewInput}
            className="mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-1 px-4 rounded"
          >
            + Add New Input
          </button>
        )}
            
        
         </div>
 </div>

       </>
  )
}

export default NoteInput