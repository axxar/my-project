import React from 'react';
import './App.css';
import Introduction from './components/intro/Introduction';
import LandingImage from './components/images/LandingImage.jpg'

function App() {

  return (
    <div className='h-screen text-white' style={{
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundImage: `url(${LandingImage})`,
    }}>
      <Introduction />
    </div>

  );
}

export default App;