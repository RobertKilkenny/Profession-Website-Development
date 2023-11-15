import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import NotFound from "./utils/NotFound";
import ProjectPage from "./utils/ProjectPage";
import { ThemeProvider } from "./utils/ThemeProvider";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="site-holder">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Navbar />
          <div className="page-holder">
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/about-me" Component={About} />
              <Route path="/projects" element={<ProjectList />} />
              <Route path="/project/:id" Component={ProjectPage} />
              <Route path="*" Component={NotFound} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
