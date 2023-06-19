import React from 'react'
import Cards from './componentes/Cards'
import "./App.css"
import Background from "./Background/background azul oscuro.mp4"

function App() {
  return (
    <div className='App'>
        <video className='videofondo' autoPlay muted loop >
      <source src={Background} type='video/mp4' />
    </video>
      <Cards/>
    </div>
  )
}

export default App
