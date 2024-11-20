import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Overview from './Overview';
import Specifications from './Specifications';
import InTheBox from './InTheBox';
import SetupInstructions from './SetupInstructions';
import Troubleshooting from './Troubleshooting';
import Maintenance from './Maintenance';
import Warranty from './Warranty';
import NotFound from './NotFound';
import Footer from './Footer';  // Import the Footer component
import './index.css';

function App() {
  return (
    <>
      <Router>
        <div>
          <header>
            <h1>KB X1000 Keyboard</h1>
            <nav>
              <ul>
                <li><Link to="/">Overview</Link></li>
                <li><Link to="/specifications">Specifications</Link></li>
                <li><Link to="/in-the-box">In The Box</Link></li>
                <li><Link to="/setup">Setup Instructions</Link></li>
                <li><Link to="/troubleshooting">Troubleshooting</Link></li>
                <li><Link to="/maintenance">Maintenance & Care</Link></li>
                <li><Link to="/warranty">Warranty & Support</Link></li>
              </ul>
            </nav>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/specifications" element={<Specifications />} />
              <Route path="/in-the-box" element={<InTheBox />} />
              <Route path="/setup" element={<SetupInstructions />} />
              <Route path="/troubleshooting" element={<Troubleshooting />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/warranty" element={<Warranty />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
