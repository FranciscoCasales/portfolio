/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import Brand from '@components/Brand';
import '@styles/components/SideBar.scss';
import Menu from './Menu';

const SideBar = (): JSX.Element => {
  const [menuShowState, setMenuShowState] = useState(false);
  const handleMenuClick = () => setMenuShowState(!menuShowState);

  return (
    <nav className={`SideBar ${menuShowState && 'open'}`}>
      {menuShowState && (
        <div
          onClick={handleMenuClick}
          onKeyPress={handleMenuClick}
          role="button"
          tabIndex={0}
          className="overlay"
        />
      )}
      <div
        onClick={handleMenuClick}
        onKeyPress={handleMenuClick}
        role="button"
        tabIndex={0}
        className="Sidebar__menu--button"
      >
        <div className="SideBar__menuBar first" />
        <div className="SideBar__menuBar second" />
        <div className="SideBar__menuBar third" />
      </div>
      <section className="SideBar__menu">
        {menuShowState ? <Brand /> : <div className="SideBar__space" />}
        <Menu routeAction={setMenuShowState} />
      </section>
    </nav>
  );
};

export default SideBar;
