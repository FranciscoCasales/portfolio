import React from 'react';
import '@styles/components/Header.scss';
// import SideBar from '@components/SideBar';
import Brand from '@components/Brand';
import NavBar from '@components/NavBar';

const Header = (): JSX.Element => (
  <header className="Header">
    <Brand />
    <NavBar />
    {/* <SideBar /> */}
  </header>
);

export default Header;
