import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Header from '../Header/Header'

const Layout = () => {
  return (
    <div>
        <Header />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='#' element={<About />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Layout