import React from 'react';
import 'frontend/styles/components/SocialNetwork.scss';
import cv from 'frontend/assets/data/CV_Ing_Jose_Francisco_Casales_Huerta.pdf';

const SocialNetwork = () => (
  <div className="SocialNetwork">
    <a
      href="https://github.com/FranciscoCasales"
      target="_blank"
      rel="noreferrer"
      className="SocialNetwork__github"
      aria-label="github"
    />
    <a
      href="https://www.linkedin.com/in/jose-francisco-casales-huerta-170735176"
      target="_blank"
      rel="noreferrer"
      className="SocialNetwork__linkedin"
      aria-label="linkedin"
    />
    <a
      href="mailto:jose.casales@outlook.com?subject=Portafolio"
      className="SocialNetwork__mail"
      aria-label="email"
    />
    <a
      href={cv}
      target="_blank"
      rel="noreferrer"
      className="SocialNetwork__curriculum"
      aria-label="curriculum"
    />
  </div>
);

export default SocialNetwork;
