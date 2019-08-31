import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import LandingPage from "./scenes/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
