import React from 'react';
import '@styles/components/Header.scss';
import SideBar from './SideBar';

const Header = (): JSX.Element => (
  <header className="Header">
    {/* <Brand />
    <NavBar /> */}
    <SideBar />
  </header>
);

export default Header;
