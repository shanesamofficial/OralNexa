import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhatWeDo from './components/WhatWeDo';
import Introduction from './components/Introduction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <Introduction />
      <Footer />
    </div>
  );
}

export default App;
