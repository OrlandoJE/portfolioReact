import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Styles
import './App.css';
// Pages
import { Inicio } from './pages/Inicio';
// Components
import { NavBar } from './components/pageComponent/NavBar';
import { Footer } from './components/pageComponent/Footer';

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
              <>
                <h1>Page Not Found</h1> <br />
                <Link to={'/portfolio'}>Return to Home</Link>
              </>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
