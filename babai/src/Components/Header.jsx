import React from 'react';
import { Link } from 'react-router-dom';
// import { HashLink } from "react-router-hash-link";

import '../Styling/Header.css';
const Header = () => {
  

  return (
    <div>
      <nav >
        <Link to='/'>Home</Link>
       
        {/* <HashLink to={"/#about"}>About</HashLink>     important  */}
        {/* <HashLink to={"/#brands"}>Brands</HashLink> */}
        <Link to='/book'>Book Rooms For You</Link>
        <Link to='/contact'>Contact Us</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/login'>Login</Link>
        <Link to='/services'>Privacy Policy</Link>
      </nav>
    </div>
  );
}

export default Header;