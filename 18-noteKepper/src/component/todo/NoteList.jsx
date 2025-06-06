import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/16/solid'

const NoteList = () => {

    const {list,handleDelete,editTask,changeStatus} =useContext(TodoContext)
  return (
    <>
      <div className='grid grid-cols-4 gap-2 '>
        {
          list.map((ele) => (
            <div key={ele.id} className='rounded-md mt-5 border border-blue-400 p-2'>
              <h4 className='font-bold'>{ele.note}</h4>
              <p onClick={()=>changeStatus(ele.id)}  className={ele.status ? 'bg-green-100 text-green-800 my-1 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 text-xs my-1 font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300'}>{
                  ele.status ?  <span>Complete</span> : <span>Not Complite</span>
                }</p>
  
                {
                  ele.newinput &&
                  <p>
                    {ele.newinput}
                  </p>
                }

                {/*{ele.todos &&  (
                      <ul  className="list-disc ml-6 mt-2 text-sm text-gray-600">
                        {ele.todos.map((todo, idx) => (
                          <li key={idx}>{todo}</li>
                        ))}
                      </ul>
                    )}*/}

          {ele.todos && (
            <ul className="list-disc ml-1 mt-2 text-sm text-gray-600">
              {ele.todos.map((todo, idx) => (
                <li key={idx} className="flex items-center space-x-1">
                  <input type="checkbox" id={`todo-${idx}`} className="form-checkbox" />
                  <label htmlFor={`todo-${idx}`} className="ml-1">{todo}</label>
                </li>
              ))}
            </ul>
          )}

     <div>
                <button onClick={()=>handleDelete(ele.id)} className=' rounded-full p-1 bg-gray-100 hover:bg-gray-200'>
                 <TrashIcon className="size-6 text-blue-500"/>
                </button>

                <button  onClick={()=>editTask(ele)} className=' rounded-full p-1 bg-gray-100 hover:bg-gray-200'>
                <PencilSquareIcon className="size-6 text-blue-500"/>
                </button>
              </div>
            </div>
          ))
        }
      </div>
   </>
  )
}

export default NoteList