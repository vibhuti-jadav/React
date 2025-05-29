import React, { createContext, useState } from 'react'

 export const CountContext = createContext()

const CreateContextProvider = ({children}) => {

    const [count , setcount] =useState(0)

    function handleCount(){
        setcount(count+1)
    }
    function handleDec(){
        setcount(count-1)
    }
    function handleReset(){
        setcount(0)
    }

  return (
   <CountContext.Provider  value={{count,handleCount,handleDec,handleReset}}>
        {children}
   </CountContext.Provider>
  )
}

export default CreateContextProvider;