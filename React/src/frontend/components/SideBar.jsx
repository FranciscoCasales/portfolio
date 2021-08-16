import React, { useState } from 'react';
import Brand from 'frontend/components/Brand';
import 'frontend/styles/components/SideBar.scss';
import Menu from './Menu';

const SideBar = () => {
  const [menuShowState, setMenuShowState] = useState(false);
  const handleMenuClick = () => setMenuShowState(!menuShowState);

  return (
    <nav className={`SideBar ${menuShowState && 'open'}`}>
      {menuShowState && (
        <button
          type="button"
          onClick={handleMenuClick}
          className="overlay"
          aria-label="overlay"
        />
      )}
      <button
        type="button"
        onClick={handleMenuClick}
        className="Sidebar__menu--button"
        aria-label="menu"
      >
        <div className="SideBar__menuBar first" />
        <div className="SideBar__menuBar second" />
        <div className="SideBar__menuBar third" />
      </button>
      <section className="SideBar__menu">
        {menuShowState ? <Brand /> : <div className="SideBar__space" />}
        <Menu routeAction={setMenuShowState} />
      </section>
    </nav>
  );
};

export default SideBar;
