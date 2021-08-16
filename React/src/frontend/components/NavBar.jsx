import 'frontend/styles/components/NavBar.scss';
import React from 'react';
import Menu from './Menu';

const NavBar = () => (
  <nav className="NavBar">
    <Menu desktop />
  </nav>
);

export default NavBar;
