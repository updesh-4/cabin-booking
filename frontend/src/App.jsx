import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Navbar from './components/ui/Navbar'
import Hero from './components/ui/Herosection'
import CoworkingPage from './components/ui/CoworkingPage';
import { Button } from './components/ui/button'

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/coworking/:city" element={<CoworkingPage />} />
        </Routes>
      </div>
    </Router>
  )
}
export default App
