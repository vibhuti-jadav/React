import React from 'react'

const Big = (Small) => {
  return ()=>{

    let data ={name:"vibhuti",email:"vibhuti@gmail.com"}
    return <Small data={data}/>

  }
}

export default Big