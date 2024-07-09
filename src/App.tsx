import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Styles
import './App.css';
// Pages
import { Inicio } from './pages/Inicio';
// Components
import { NavBar } from './components/pageComponent/NavBar';
import { Footer } from './components/pageComponent/Footer';

import { DialogContacto } from './components/modals/DialogContacto';
import { DialogProyectosPage } from './components/modals/DialogProyectos';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/portfolio' element={<Inicio />} />
          <Route
            path='*'
            element={
              <div style={{ textAlign: 'center', padding: '40vh 0' }}>
                <h1>Page Not Found</h1> <br />
                <Link to={'/portfolio'}>
                  <button className={'primary'}>Return Home</button>
                </Link>
              </div>
            }
          />
        </Routes>
        <Footer />
      </Router>
      <DialogContacto />
      <DialogProyectosPage />
    </>
  );
}

export default App;
