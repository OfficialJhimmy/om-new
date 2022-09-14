import React, { useState } from "react";
// import { Button } from './Button';
import { Link } from "react-router-dom";
import "./Navbar.css";
// import Dropdown from './Dropdown';
import Logo from "../../assets/icons/new-logo.png";
import { MdExitToApp } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";

function Navbar() {
  const [click, setClick] = useState(false);
  //   const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //   const onMouseEnter = () => {
  //     if (window.innerWidth < 960) {
  //       setDropdown(false);
  //     } else {
  //       setDropdown(true);
  //     }
  //   };

  //   const onMouseLeave = () => {
  //     if (window.innerWidth < 960) {
  //       setDropdown(false);
  //     } else {
  //       setDropdown(false);
  //     }
  //   };

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      {/* <nav className='navbar'> */}
      <nav className={color ? "navbar navbar-bg" : "navbar"}>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={Logo} alt="Logo" className="logo--navbar" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <MdExitToApp className="menu-icon__nav" />
          ) : (
            <CgMenuRight className="menu-icon__nav" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/insights"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Insights
            </Link>
          </li>
          <li
            className="nav-item"
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            {/* {dropdown && <Dropdown />} */}
          </li>
          <li className="nav-item">
            <Link
              to="/industries"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Industries
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/career" className="nav-links" onClick={closeMobileMenu}>
              Career
            </Link>
          </li>
          <li className="nav-item wht--link">
            <Link to="/whtapp" className="nav-links" onClick={closeMobileMenu}>
              WHT APP
            </Link>
          </li>
          <li>
            {/* <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
                Get in Touch 👋
            </Link> */}
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;
