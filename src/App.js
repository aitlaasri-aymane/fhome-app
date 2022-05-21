import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import React  from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Services from './pages/Services';
import Company from './pages/Company';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/company" element={<Company/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;