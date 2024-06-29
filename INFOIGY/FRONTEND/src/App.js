import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Vision from "./components/Vision";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './AboutUsPage/About';
import Career from './components/Career';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/vision" element={<Vision />} />
          <Route exact path="/portfolio" element={<Projects />} />
          <Route exact path ='/about' element={<About/>} />
          <Route exact path='/career' element={<Career />} />

        </Routes>
        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
