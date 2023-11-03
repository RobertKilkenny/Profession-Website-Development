import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/web-components/navbar";
import Home from "./components/web-components/home";
import About from "./components/web-components/about";
import NotFound from "./components/utilities/not-found";
import "./App.css";
import "./components/utilities/default-page.css";

function App() {
  return (
    <div className="site-holder">
      <Router>
        <Navbar />
        <div className="page-holder">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about-me" Component={About} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
