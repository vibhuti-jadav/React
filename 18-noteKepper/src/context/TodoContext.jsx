import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import React from 'react'
import { toast } from "react-toastify";

export const TodoContext = createContext();


const TodoContextProvider = ({children}) => {

const [note,setNote] =useState("")
const [list, setList]=useState([])

function handleChange(e){
    setNote(e.target.value)
}

function handleTask(){
    setList([
        ...list,
        {
            id:uuidv4(),
            note,
            status:false,
        }
    ])
    toast("task added successfully..")
}

function handleDelete(id){
    const del = list.filter(item =>item.id !==id)
    setList(del)
    toast("note deleted successfully...")
    
}





console.log(list)

  return (
    <TodoContext.Provider value={{handleChange,handleTask,list,note,handleDelete}}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider