import { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, Menu, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./navbar.css";
import { ModeToggle } from "@/components/mode-toggle";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(window.innerWidth > 1000);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
      closeMobileMenu();
    }
  };

  window.addEventListener("resize", showButton);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left-container">
            <Link to="/" className="navbar-logo">
              <Home height={40} color="white" />
              Robert Kilkenny
            </Link>
            <ul className="navbar-site-list">
              {click ? <></> : <li className="nav-spacer">|</li>}
              <li className="nav-item">
                <Link
                  to="/project-1"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Project 1
                </Link>
              </li>

              {click ? <></> : <li className="nav-spacer">|</li>}

              <li className="nav-item">
                <Link
                  to="/project-2"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Project 2
                </Link>
              </li>
              {click ? <></> : <li className="nav-spacer">|</li>}

              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Website
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-right-container">
            <ul className={click ? "nav-menu-active" : "nav-menu-inactive"}>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Project List
                </Link>
              </li>

              {click ? <></> : <li className="nav-spacer">|</li>}

              <li className="nav-item">
                <Link
                  to="/about-me"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About Me
                </Link>
              </li>

              {!button && click && (
                <li className="nav-item">
                  <Link
                    to="/contact-me"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Contact Me
                  </Link>
                </li>
              )}
            </ul>
            <div className="menu-icon" onClick={handleClick}>
              {click ? (
                <XCircle height={40} color="black" />
              ) : (
                <Menu height={40} color="blue" />
              )}
            </div>
            {button && (
              <Button>
                <Link to="/contact-me">Contact Me</Link>
              </Button>
            )}
          </div>
          <ModeToggle />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
