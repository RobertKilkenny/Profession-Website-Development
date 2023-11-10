import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Menu, XCircle } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <Home height={40} />
          </Link>
          <div className="navbar-left-container">
            <menu className="navbar-site-list divide-x-2 divide-white">
              <li className="nav-item">
                <Link
                  to="/project-1"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Project 1
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/project-2"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Project 2
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Website
                </Link>
              </li>
            </menu>
          </div>

          <div className="navbar-right-container">
            <menu
              className={
                click
                  ? "nav-menu-active"
                  : "nav-menu-inactive divide-x-2 divide-white"
              }
            >
              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Project List
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/about-me"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact-me"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact Me
                </Link>
              </li>
            </menu>
            <div className="menu-icon" onClick={handleClick}>
              {click ? (
                <XCircle height={40} color="black" />
              ) : (
                <Menu height={40} color="blue" />
              )}
            </div>
          </div>
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
