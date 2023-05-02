import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Rutas from './components/Rutas'
import Footer from './components/Footer'

function App() {
   return (
    <div className="App">
      <Nav />   
      <Rutas />
      <Footer />
    </div>
  )
}

export default App;
