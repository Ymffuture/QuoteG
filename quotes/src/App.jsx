import { useState } from 'react'
import './App.css'
import RandomQoute from './componets/RandomQoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RandomQoute/>
    </>
  )
}

export default App
