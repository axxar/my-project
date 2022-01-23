import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;