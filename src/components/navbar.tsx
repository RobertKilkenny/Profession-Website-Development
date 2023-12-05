import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Menu, XCircle } from "lucide-react";
import { ModeToggle } from "@/components/ModeToggle";
import "@/components/NavBar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key == "Enter") {
      setClick(!click);
    }
  };

  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="bg-gradient-to-r from-navbar-start via-navbar-middle to-navbar-end navbar">
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
                Project List
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/project/website"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Making this Site
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
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
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
            {click && (
              <li>
                <Link
                  to="/projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Project List
                </Link>
              </li>
            )}
          </menu>
          <button
            className="menu-icon"
            onClick={handleClick}
            onKeyDown={handleKeyPress}
          >
            {click ? (
              <XCircle height={40} color="black" />
            ) : (
              <Menu height={40} color="blue" />
            )}
          </button>
          <div className="navbar-image">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
