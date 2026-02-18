import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import UniversityPage from './pages/UniversityPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/university/:universityId" element={<UniversityPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
