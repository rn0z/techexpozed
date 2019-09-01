import React from 'react';
import { Link } from "react-router-dom";

const NavbarLinks = () => {
  return (
    <ul className="list-style-type-none">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/our-work">Our Work</Link></li>
      <li><Link to="/our-team">Our Team</Link></li>
      <li><Link to="/pricing">Pricing</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  )
}

export default NavbarLinks;
