import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Navigate to="about" replace/> }/>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />}/>
          <Route path='resume' element={<Resume />}/>
          <Route path='portfolio' element={<Portfolio />}/>
          <Route path='contact' element={<Contact />}/>
        </Route>

        {/* Other Route */}
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>
  )
}

export default App
