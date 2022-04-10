import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Hobbies from './components/Hobbies';

function App() {

  return (
    <>
      <Navbar>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/sideline" element={<Hobbies />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Navbar>
      <Footer />
    </>
  );
}

export default App;