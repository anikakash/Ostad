import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

// imported pages are here
import Home from './pages/Home'
import Team from './pages/Team'
import Service from './pages/Service'
import Projects from './pages/Projects'
import Testimonials from './pages/Testimonials'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/service' element={<Service />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/testimonials' element={<Testimonials />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
