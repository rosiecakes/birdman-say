import React from 'react'
import Birdman from './components/Birdman'
import Quote from './components/Quote'
import './App.css'

function App() {
  return (
    <div className="App container has-text-centered">
      <header className="App-header">
        <Quote />        
        <Birdman />        
      </header>
    </div>
  )
}

export default App
