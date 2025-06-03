import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import React from 'react'
import { toast } from "react-toastify";

export const TodoContext = createContext();


const TodoContextProvider = ({children}) => {

const [note,setNote] =useState("")
const [list, setList]=useState([])
const [noteid,setnoteid]=useState("")

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

    setNote("")
}

function editTask(ele)
{
    console.log(ele)
    setNote(ele.note)
    setnoteid(ele.id)
}



function UpdateTask(){
    let newList = list.map((ele)=>{
        if(ele.id == noteid)
        {
            ele.note =note
        }
        return ele
    })

    setList(newList)
    setNote("")
    setnoteid("")

    toast("note updated successfully...")
}

function changeStatus(id){
    setList(list.map((ele)=>
        ele.id  == id ? {...ele,status:!ele.status}:ele
    ))
}


function handleDelete(id){
    const del = list.filter(item =>item.id !==id)
    setList(del)
    toast("note deleted successfully...")
    
}






console.log(list)

  return (
    <TodoContext.Provider value={{handleChange,handleTask,list,note,handleDelete,editTask,noteid,UpdateTask,changeStatus}}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider