import React from 'react';
import '@styles/components/Menu.scss';
import { MenuModel } from '@models/menu-model';

const Menu = ({ desktop = false }: MenuModel): JSX.Element => (
  <ul className={`Menu ${desktop && 'desktop'}`}>
    <li>
      Hola
      <span />
    </li>
    <li className="selected">
      Habilidades
      <span />
    </li>
    <li>
      Experiencia
      <span />
    </li>
    <li>
      Blog
      <span />
    </li>
    <li>
      Contactame
      <span />
    </li>
  </ul>
);

export default Menu;
