import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Menu, XCircle } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import "./NavBar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left-container">
            <menu className="navbar-site-list divide-x-2">
              <Link to="/" className="navbar-image">
                <Home height={40} />
              </Link>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <strong>Project List</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/project-website"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Website Project
                </Link>
              </li>
            </menu>
          </div>

          <div className="navbar-right-container">
            <menu
              className={
                click ? "nav-menu-active" : "nav-menu-inactive divide-x-2"
              }
            >
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
              <li></li>
            </menu>
            <div className="menu-icon" onClick={handleClick}>
              {click ? (
                <XCircle height={40} color="black" />
              ) : (
                <Menu height={40} color="blue" />
              )}
            </div>
            <div className="navbar-image">
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
