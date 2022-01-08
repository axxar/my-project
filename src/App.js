import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Introduction from './components/intro/Introduction';

function App() {

  return (
    <>
      <Introduction />
    </>

  );
}

export default App;