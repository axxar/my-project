import React from 'react';
import './App.css';
import Introduction from './components/Introduction';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar>
        <Routes>
          <Route exact path="/" element={<Introduction />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Navbar>
    </>
  );
}

export default App;