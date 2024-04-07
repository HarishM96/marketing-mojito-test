import React from 'react';
import Logo from '/Logo.webp';
import './coursepage.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={Logo} alt="navbar-logo" width="110px" height="25px" />
        <ul>
            <li> Our Courses </li>
            <li> Resources </li>
            <li> My Dashboard </li>
            <li className='highlight'> Register </li>
            <li> Login </li>
        </ul>
    </div>
  )
}

export default Navbar;