import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/16/solid'

const NoteList = () => {

    const {list,handleDelete,handleUpdate} =useContext(TodoContext)
  return (
    <>
      <div className='grid grid-cols-4 gap-2 '>
        {
          list.map((ele) => (
            <div className='rounded-md mt-5 border border-blue-400 p-2'>
              <h4 className='font-bold'>{ele.note}</h4>
              <p className={ele.status ? 'text-green-600' : 'text-red-600'}>{
                  ele.status ?  <span>Complete</span> : <span>Not Complite</span>
                }</p>
              <div>
                <button onClick={()=>handleDelete(ele.id)} className=' rounded-full p-1 bg-gray-100 hover:bg-gray-200'>
                 <TrashIcon className="size-6 text-blue-500"/>
                </button>

                <button  className=' rounded-full p-1 bg-gray-100 hover:bg-gray-200'>
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