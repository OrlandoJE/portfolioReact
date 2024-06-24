import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import { Inicio } from './pages/Inicio'
import { ProyectosPage } from './pages/ProyectosPage'
import { Tecnologias } from './pages/Tecnologias'

import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
      <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/proyectos' element={<ProyectosPage />} />
            <Route path='/Tecnologias' element={<Tecnologias />} />
            <Route path='*' element={<><h1>Page Not Found</h1> <br /><Link to={'/'}>Return to Home</Link></>} />
          </Routes>
          <Footer />
        </Router>
    </>
  )
}

export default App
