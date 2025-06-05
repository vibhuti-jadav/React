import React from 'react'

const TodoList = ({todo}) => {

    console.log("checking for memorization")
    
  return (
    <>
<h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">lists:</h2>
<ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
 {
     todo.map((ele,index)=>(
         <li>
        {ele} - {index+1}
    </li>
  
))
}
    
</ul>
    </>

  )
}

export default React.memo(TodoList) 