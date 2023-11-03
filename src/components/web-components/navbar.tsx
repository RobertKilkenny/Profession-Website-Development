import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HomeIcon, Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";
import Button from "./../utilities/button";
import "./navbar.css";

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
              <HomeIcon height={40} color="white" />
              Robert Kilkenny
            </Link>
            <ul className="navbar-site-list">
              {click ? <></> : <li className="nav-spacer">|</li>}
              <li className="nav-item">
                <Link
                  to="/about-me"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Project 1
                </Link>
              </li>

              {click ? <></> : <li className="nav-spacer">|</li>}

              <li className="nav-item">
                <Link
                  to="/projects"
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
            </ul>
            <div className="menu-icon" onClick={handleClick}>
              {click ? (
                <XCircleIcon height={40} color="black" />
              ) : (
                <Bars3Icon height={40} color="blue" />
              )}
            </div>
            {button && (
              <Button
                _buttonStyle="btn--outline"
                _buttonSize="btn--medium"
                _routing="/about-me"
                _onClick={closeMobileMenu}
              >
                Contact Me
              </Button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
