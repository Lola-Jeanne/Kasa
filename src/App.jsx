import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/index'
import Error from './components/Error/Error'
import About  from './pages/About/about'
import Logement from './pages/Logement/logement'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App; 
