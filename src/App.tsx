import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import projectList from "./components/project-list";
import NotFound from "./utils/not-found";
import "./utils/default-page.css";
import "./App.css";

import { ThemeProvider } from "./utils/theme-provider";

function App() {
  return (
    <div className="site-holder">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Navbar />
          <div className="page-holder">
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/about-me" Component={About} />
              <Route path="/projects" Component={projectList} />
              <Route path="*" Component={NotFound} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
