import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Weather from './routing/Weather'

const App = () => {
  return (
    
    <BrowserRouter>
    <Weather/>
    </BrowserRouter>
  )
}

export default App