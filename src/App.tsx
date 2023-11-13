import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import ProjectList from "./components/project-list";
import NotFound from "./utils/not-found";
import ProjectPage from "./utils/project-page";
import "./utils/default-page.css";
import "./App.css";
import { ThemeProvider } from "./utils/theme-provider";

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
