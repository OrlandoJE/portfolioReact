import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Pages
import { Homepage } from './pages/Homepage';
// Components
import { NavBar } from './components/pageComponent/NavBar';
import { Footer } from './components/pageComponent/Footer';
import { DialogContact } from './components/modals/DialogContact';
import { ExperiencePage } from './pages/ExperiencePage';

function App() {
  return (
    <>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/portfolioReact' element={<Homepage />} />
            <Route
              path='/portfolioReact/experience'
              element={<ExperiencePage />}
            />
            <Route
              path='*'
              element={
                <section style={{ textAlign: 'center', padding: '40vh 0' }}>
                  <h1>Page Not Found</h1> <br />
                  <Link to={'/portfolioReact'}>
                    <button className={'primary'}>Return Home</button>
                  </Link>
                </section>
              }
            />
          </Routes>
          <Footer />
        </Router>
        <DialogContact />
    </>
  );
}

export default App;
