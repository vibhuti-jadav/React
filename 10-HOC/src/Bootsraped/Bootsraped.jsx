
import React,{useState} from "react"

export const Alert = ({type, message}) => {

  const [showing, setShowing] =  useState(true)
    function close(){
        setShowing(!showing)
    }

  return (

    <div className={`${showing ? 'd-flex' : 'd-none'} border border-${type} p-2 rounded text-${type} fw-bold position-absolute justify-content-between`}
     style={{width:"300px", top:"20px", right:"20px"}}
    >
        <span>
         { type == "danger" ? "⛔" : type== "success" ? "✅" : "⚠️"}
           {message}</span>
        <button onClick={close} className="btn-close btn-sm text-danger"></button>
    </div>
  )

}


export const Button = ({type,icon, children}) => {
  return (
    
    <button className={`btn btn-outline-${type} btn px-5 m-2`}>{icon} {children}</button>
    
  )
}