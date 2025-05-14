import { useState } from 'react'
import './App.css'
import List from './component/list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List/>
    </>
  )
}

export default App
