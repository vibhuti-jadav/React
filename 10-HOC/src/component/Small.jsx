import React from 'react'

const Small = ({data}) => {
  return (
    <>
        <h2>username:{data.name}</h2>
        <h2>Email:{data.email}</h2>
    </>
  )
}

export default Small