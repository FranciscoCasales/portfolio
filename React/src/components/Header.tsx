import React from 'react';
import '@styles/components/Header.scss';
// import SideBar from '@components/SideBar';
import Brand from '@components/Brand';
import NavBar from '@components/NavBar';
import useScreenSize from '@hooks/useScreenSize';
import SideBar from './SideBar';

const Header = (): JSX.Element => {
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
