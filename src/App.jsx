import React from 'react'
import './index.css'
import Home from './pages/Home'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' extract={true} element={<Home />} />
        </Routes>
      </BrowserRouter>
      
     
    </>
  )
}