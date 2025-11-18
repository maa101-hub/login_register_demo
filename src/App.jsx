import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './Signup'
import Login from './login'
import Home from './Home'
import Teacher from './Teacher'
function App() {
  return (
    <>
      <h1>Welcome to the App</h1>
      <p>This is a simple application using React.</p>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/teacher' element={<Teacher></Teacher>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
