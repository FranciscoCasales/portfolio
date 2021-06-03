import React from 'react';
import '@styles/containers/Home.scss';
import SocialNetwork from '@components/SocialNetwork';

const Home = (): JSX.Element => (
  <section className="Home">
    <div className="Home__shapeWrapper">
      <div className="Home__shape" />
    </div>
    <div className="Home__content">
      <h2>Hola!</h2>
      <h1>Soy Francisco Casales</h1>
      <p>Desarrollador FullStack Profesional</p>
      <p>
        Me apasionan los nuevos retos y simpre estoy listo para un nuevo
        desafio, tengo experiencia en Angular y React asi como en Java y NodeJs
      </p>
    </div>
  </section>
);

export default Home;
