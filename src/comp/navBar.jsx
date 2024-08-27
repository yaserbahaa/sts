import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/navBar.css';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import wsp from "../assets/icons8-whatsapp-50.png"

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  
  const [click2, setClick2] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
  //dropdown2

  const closeMobileMenu2 = () => setClick2(false);

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img style={{cursor:"pointer"}} src={wsp} alt="" />
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li> */}
          <li className='nav-item'>
            <Link
              to='https://sts.gold/?p=490'
              target='_blank'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Recommendations
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseLeave={onMouseLeave}
          >
            <Link
              onMouseEnter={onMouseEnter}
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Courses <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li
            className='nav-item'
            onMouseLeave={onMouseLeave2}
          >
            <Link
              onMouseEnter={onMouseEnter2}
              to='/services'
              className='nav-links-s'
              onClick={closeMobileMenu2}
            >
              Automated Programs <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>

          <li className='nav-item'>
            <Link
              to='https://sts.gold/?page_id=503'
              target='_blank'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className='wspParent'>
        <img className='wspImg' src={wsp} alt="" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;