import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UserLayout from './components/layout/UserLayout'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
      <Route path='/' index element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
