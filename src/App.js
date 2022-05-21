import {BrowserRouter as Router , Routes} from 'react-router-dom'
import React  from 'react';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      </Routes>
    </Router>
  );
}

export default App;