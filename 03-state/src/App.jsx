import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  function handleCart(){
    setCount(count+1)
  }

  return (
    <>
    
      <h1>This is a state method</h1>

        <button onClick={handleCart}>
          count is {count}
        </button>
       
     
    </>
  )
}

export default App
