import React from 'react';
import 'frontend/styles/components/Header.scss';
import Brand from 'frontend/components/Brand';
import NavBar from 'frontend/components/NavBar';
import useScreenSize from 'frontend/hooks/useScreenSize';
import SideBar from 'frontend/components/SideBar';

const Header = () => {
  const [clientWidth, clientHeight] = useScreenSize();

  return (
    <header className="Header">
      {clientWidth <= 550 && clientHeight <= 900 ? (
        <SideBar />
      ) : (
        <>
          <Brand />
          <NavBar />
        </>
      )}
    </header>
  );
};

export default Header;
