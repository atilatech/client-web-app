import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import LandingPage from "./scenes/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./scenes/Blog";
import Scholarship from "./scenes/Scholarship";


function App() {
  return (
      <Router>
        <div className="App">
            <Navbar />
            <Route exact path="/" component={LandingPage} />
            <Route path="/blog" component={Blog} />
            <Route path="/scholarship" component={Scholarship} />
            <Footer />
        </div>
      </Router>
  );
}

export default App;
