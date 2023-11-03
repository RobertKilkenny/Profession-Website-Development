import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/web-components/navbar";
import Home from "./components/web-components/home";
import About from "./components/web-components/about";
import "./App.css";

function App() {
  return (
    <div className="holder">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about-me" Component={About}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
