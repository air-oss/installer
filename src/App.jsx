import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="content-center text-center text-white bg-neutral-800 w-3/4 h-2/4 rounded-md">
      <h1 className="text-4xl">Welcome</h1>
      <h1 className="text-1xl text-slate-500">Welcome to Air Os Installer, now select your launguage</h1>
    </div>
  )
}

export default App
