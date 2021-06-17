import React from 'react';
import '@styles/components/Menu.scss';
import { MenuModel } from '@models/menu.model';
import useRouting from '@hooks/useRouting';

const Menu = ({ desktop = false, routeAction }: MenuModel): JSX.Element => {
  const { Home, Skills, Experience, navigate } = useRouting(!desktop);
  const handleRouting = (event: any): void => {
    if (routeAction) {
      routeAction(false);
    }
    const menuRoute: string = event.target.id;
    navigate(menuRoute);
  };

  return (
    <ul className={`Menu ${desktop && 'desktop'}`}>
      <li className={Home ? 'isActive' : ''}>
        <button
          className="Menu__route"
          type="button"
          id="menu-home"
          onClick={handleRouting}
        >
          Hola
          <span />
        </button>
      </li>
      <li className={Skills ? 'isActive' : ''}>
        <button
          className="Menu__route"
          type="button"
          id="menu-skills"
          onClick={handleRouting}
        >
          Habilidades
          <span />
        </button>
      </li>
      <li className={Experience ? 'isActive' : ''}>
        <button
          className="Menu__route"
          type="button"
          id="menu-experience"
          onClick={handleRouting}
        >
          Experiencia
          <span />
        </button>
      </li>
    </ul>
  );
};

export default Menu;
