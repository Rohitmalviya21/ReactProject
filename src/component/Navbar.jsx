import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Images/1200x630wa.jpg";
import { AuthContext } from "../context/AuthContext";
import "../component/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav-wrapper">
      
     
      <NavLink to="/" className="brand-logo" onClick={closeMenu}>
        <img src={logo} alt="VESTRO Logo" />
        <span className="brand-text">VESTRO</span>
      </NavLink>

      {/* TOGGLE */}
      <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

     
      <ul className={`navbar ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/" onClick={closeMenu}>HOME</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>ABOUT</NavLink></li>
        <li><NavLink to="/product" onClick={closeMenu}>PRODUCTS</NavLink></li>
        <li><NavLink to="/blog" onClick={closeMenu}>BLOG</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>CONTACT</NavLink></li>

        {!isLoggedIn ? (
          <li><NavLink to="/login" onClick={closeMenu}>LOGIN</NavLink></li>
        ) : (
          <li>
            <NavLink
              to="/login"
              onClick={() => {
                setIsLoggedIn(false);
                closeMenu();
              }}
            >
              LOGOUT
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
