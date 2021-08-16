import React from 'react';
import 'frontend/styles/containers/Home.scss';
import { PAGES } from 'frontend/constants/general.constants';
import useMenuRef from 'frontend/hooks/useMenuRef';

const Home = () => {
  const homeRef = useMenuRef(PAGES.HOME);
  return (
    <section ref={homeRef} className="Home" id="Home">
      <div className="Home__shapeWrapper">
        <div className="Home__shape" />
      </div>
      <div className="Home__content">
        <h2>Hola!</h2>
        <h1>Soy Francisco Casales</h1>
        <p>Desarrollador FullStack Profesional</p>
        <p>
          Me apasionan los nuevos retos y siempre estoy listo para un nuevo
          desafío, tengo experiencia en Angular y React así como en Java y
          NodeJs
        </p>
      </div>
    </section>
  );
};

export default Home;
