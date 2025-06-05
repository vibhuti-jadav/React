import { createContext, useState ,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import React from 'react'
import { toast } from "react-toastify";

export const TodoContext = createContext();


const TodoContextProvider = ({children}) => {

const [note,setNote] =useState("")
const [list, setList]=useState([])
const [noteid,setnoteid]=useState("")
const [count,setCount] =useState(false)
const [newinput,setNewinput]=useState("")
const [num ,setNum] = useState(0)
const [noteList,setNoteList]=useState([])


function handleChange(e){
    setNote(e.target.value)
    if(!num){
        setCount(true)
    }
}
function handleTask(){
    setList([
        ...list,
        {
            id:uuidv4(),
            note,
            newinput,
            todos: noteList.filter((ele) => ele!== ""),
            status:false,
        }
    ])
    toast("task added successfully..")

    setNote("")
    setNoteList("")
}

function editTask(ele)
{
    console.log(ele)
    setNote(ele.note)
    setnoteid(ele.id)
    setNewinput(ele.newinput || "")
    setNoteList(ele.todos || [])
}

function handleNote(e,index){
    // setNum(num+1)
    const updatedList = [...noteList];
    updatedList[index] = e.target.value;
    setNoteList(updatedList);
}

function UpdateTask(){
    let newList = list.map((ele)=>{
        if(ele.id == noteid)
        {
           return{
            ...ele,
            note,
            newinput,
            todos: noteList.filter((ele) => ele!== ""),
           }
        }
        return ele
    })

    setList(newList)
    setNote("")
    setnoteid("")
    setNewinput("")
    setNoteList([])
    setNum(0)
    

    toast("note updated successfully...")
}

function changeStatus(id){
    setList(list.map((ele)=>
        ele.id  == id ? {...ele,status:!ele.status}:ele
    ))
}

  const addNewInput = () => {
    setNum(prev => prev + 1)
  }

function handleDelete(id){
    const del = list.filter(item =>item.id !==id)
    setList(del)
    toast("note deleted successfully...")
   
}






console.log(list)

  return (
    <TodoContext.Provider value={{handleChange,handleTask,list,note,handleDelete,editTask,noteid,UpdateTask,changeStatus,setCount,count,newinput,setNewinput,handleNote,setNum,num,addNewInput}}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider