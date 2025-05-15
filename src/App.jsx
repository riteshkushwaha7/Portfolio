import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import Resume from './components/resume';
import Skills from './components/skills';
import Projects from './components/projects';
import ProfileStats from './components/dsa';
import Footer from './components/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
}


function App() {
  return (
    <Router>
      <ScrollToHashElement />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Skills />
              <Contact />
            </>
          }
        />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dsa" element={<ProfileStats />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
