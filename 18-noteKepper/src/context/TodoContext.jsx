import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import React from 'react'
import { toast } from "react-toastify";

export const TodoContext = createContext();


const TodoContextProvider = ({ children }) => {

    const [note, setNote] = useState("")
    const [list, setList] = useState([])
    const [noteid, setnoteid] = useState("")
    const [count, setCount] = useState(false)
    const [newinput, setNewinput] = useState("")
    const [num, setNum] = useState(0)
    const [noteList, setNoteList] = useState([])
    const [editId, setEditId] = useState("")

        const [searchText, setSearchText] = useState("");

            const filteredList = list.filter(item =>
  item.note.toLowerCase().includes(searchText.toLowerCase())
);




function setLocal(ta){
    localStorage.setItem("note_arr",JSON.stringify(ta))
    getLocal()
}

function getLocal(){
       let note_arr = JSON.parse(localStorage.getItem("note_arr")) || []
       setList(note_arr)

}

    function handleChange(e) {
        setNote(e.target.value)
        if (!num) {
            setCount(true)
        }

    }

    useEffect(()=>{
        getLocal()
    }, [])

    function handleNote(e, index) {
        // setNum(num+1)
        const updatedList = [...noteList];
        updatedList[index] = e.target.value;
        setNoteList(updatedList);

    }

    function togglePin(id) {
    const pinnedlist = list.map((item) => 
        item.id === id ? { ...item, pinned: !item.pinned } : item
    );
    setList(pinnedlist);
    setLocal(pinnedlist);
}



    function handleTask() {
        let newList = [
            ...list,
            {
                id: uuidv4(),
                note,
                newinput,
                todos: noteList.filter((ele) => ele !== ""),
                status: false,
                
              }
        ]
        
        toast("task added successfully..")

        setNote("")
        setNewinput("")
        setCount(false)
        setNum(0)
        setNoteList([])

     setLocal(newList)

    }

    function handleDelete(id) {
        const del = list.filter(item => item.id !== id)
        setList(del)
        toast("note deleted successfully...")

            setLocal(del)
      
    }

    const addNewInput = () => {
        setNum(prev => prev + 1)
    
    }




    function editTask(ele) {
        setEditId(ele.id)
        console.log(ele)

        setNote(ele.note)
        setnoteid(ele.id)

        if(ele.newinput) {
            setCount(true)
            setNewinput(ele.newinput || "")
        }
        setNum(ele.todos.length)
        setNoteList(ele.todos || [])
   
       

    }



    function UpdateTask() {
        let newList = list.map((ele) => {
            if (ele.id == noteid) {
                return {
                    ...ele,
                    note,
                    newinput,
                    todos: noteList.filter((ele) => ele !== ""),
                    
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
        
       setLocal(newList)

        toast("note updated successfully...")
    }

    function changeStatus(id) {
        setList(list.map((ele) =>
            ele.id == id ? { ...ele, status: !ele.status } : ele
        ))

        
       
    }

    console.log(list)

    


    return (
        <TodoContext.Provider 
        value={{
           
            handleChange,
            handleTask,
            handleDelete,
            editTask,
            list:filteredList,
            note,
            noteid,
            count, 
            newinput,
            num,
            UpdateTask,
            changeStatus,
            setCount,
            setNewinput, 
            handleNote, 
            setNum,
            addNewInput,
            editId, 
            noteList,
            setSearchText,
            searchText,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider