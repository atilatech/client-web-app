import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import LandingPage from "./scenes/LandingPage/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./scenes/Blog/Blog";
import ScholarshipsList from "./scenes/Scholarship/ScholarshipsList/ScholarshipsList";
import Team from "./components/Team/Team";
import Practice from './scenes/Practice/Practice';


function App() {
  return (
      <Router>
        <div className="App">
            <Navbar />
            <Route exact path="/" component={LandingPage} />
            <Route path="/blog" component={Blog} />
            <Route path="/scholarship" component={ScholarshipsList} />
            <Route path="/team" component={Team} />
            <Route path="/practice" component={Practice} />
            <Footer />
        </div>
      </Router>
  );
}

export default App;
