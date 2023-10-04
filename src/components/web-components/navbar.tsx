import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CloudIcon, Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid';
import Button from './../utilities/button'
import './navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Robert Kilkenny
                        <CloudIcon height={40} color='blue' />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <XCircleIcon height={40} color='black' /> : <Bars3Icon height={40} color='blue' />}
                    </div>
                    <ul className={click ? 'nav-menu-active' : 'nav-menu-inactive'}>
                        <li className='nav-item'>
                            <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/temp' className='nav-links' onClick={closeMobileMenu}>
                                Temp
                            </Link>
                        </li>
                    </ul>
                    {button && <Button _buttonStyle='btn--outline' _buttonSize='' _onClick={closeMobileMenu}> Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar