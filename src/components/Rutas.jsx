import React from 'react'
import Home from '../Pages/Home'
import Menu from '../Pages/Menu'
import Recipe from '../Pages/Recipe'
import Aboutus from '../Pages/About-us'
import {BrowserRouter,Routes, Route } from "react-router-dom"

const Rutas = () => {
  return (
    <div>
        <BrowserRouter>

              <Routes>
              <Route 
                path= '/'
                element = { <Home /> } />

              <Route 
              path='Menu'
              element = {<Menu />} />

              <Route 
              path='Recipe' 
              element = {<Recipe />} />

              <Route
              path='AboutUs'
              element={<Aboutus />} />
              </Routes>

        </BrowserRouter>
    </div>
  )
}

export default Rutas;