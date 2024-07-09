import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Pages
import { Home } from './pages/Home';
// Components
import { NavBar } from './components/pageComponent/NavBar';
import { Footer } from './components/pageComponent/Footer';
import { DialogContact } from './components/modals/DialogContact';
import { DialogProjectsPage } from './components/modals/DialogProjects';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/portfolio' element={<Home />} />
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
      {/* Dialogs / Modals */}
      <DialogContact />
      <DialogProjectsPage />
    </>
  );
}

export default App;
