// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li>
                    <Link to="/news" className="nav-icon" title="News">📰</Link>
                </li>
                <li>
                    <Link to="/info" className="nav-icon" title="Info">ℹ️</Link>
                </li>
                <li>
                    <Link to="/" className="nav-icon logo" title="Home">🏠</Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-icon" title="Contact">📞</Link>
                </li>
                <li>
                    <Link to="/about" className="nav-icon" title="About">📖</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
