import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddQuestion from './components/question/AddQuestion'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<AddQuestion />} />
          </Routes>
        </Router>
      );
    }
  )
}

export default App
