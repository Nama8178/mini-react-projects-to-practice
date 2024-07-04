import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Home from "./Components/Pages/Home"
import NavBar from "./Components/NavBar"
import About from './Components/Pages/About'
import SignUp from "./Components/Pages/SignUp"
import Products from './Components/Pages/Products'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<NavBar/>} >
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/signup' element={<SignUp/>} />
      </Route>    
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
