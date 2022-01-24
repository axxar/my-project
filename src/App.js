import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contact from './components/Contact';
import { BrowserRouter as Route, Routes } from "react-router-dom";
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar>
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Navbar>
      <Footer />
    </>
  );
}

export default App;