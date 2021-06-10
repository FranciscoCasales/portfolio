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
        <div
          id="menu-home"
          onClick={handleRouting}
          onKeyPress={handleRouting}
          role="button"
          tabIndex={0}
        >
          Hola
          <span />
        </div>
      </li>
      <li className={Skills ? 'isActive' : ''}>
        <div
          id="menu-skills"
          onClick={handleRouting}
          onKeyPress={handleRouting}
          role="button"
          tabIndex={0}
        >
          Habilidades
          <span />
        </div>
      </li>
      <li className={Experience ? 'isActive' : ''}>
        <div
          id="menu-experience"
          onClick={handleRouting}
          onKeyPress={handleRouting}
          role="button"
          tabIndex={0}
        >
          Experiencia
          <span />
        </div>
      </li>
    </ul>
  );
};

export default Menu;
