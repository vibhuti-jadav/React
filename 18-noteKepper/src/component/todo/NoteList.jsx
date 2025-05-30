import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

const NoteList = () => {

    const {list} =useContext(TodoContext)
  return (
    <>
      <div className='grid grid-cols-4 gap-2 '>
        {
          list.map((ele) => (
            <div className='rounded-md mt-5 border border-amber-500-400 p-2'>
              <h4 className='font-bold'>{ele.note}</h4>
              <p className={ele.status ? 'text-green-600' : 'text-red-600'}>{
                  ele.status ?  <span>Complete</span> : <span>Not Complite</span>
                }</p>
              <div>
                <button className=' rounded-full p-1 bg-gray-100 hover:bg-gray-200'>
                 🗑️
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