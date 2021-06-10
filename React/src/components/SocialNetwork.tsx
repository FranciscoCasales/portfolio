/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import '@styles/components/SocialNetwork.scss';
import cv from '@data/cv.pdf';

const SocialNetwork = (): JSX.Element => (
  <div className="SocialNetwork">
    <a
      href="https://github.com/FranciscoCasales"
      target="_blank"
      rel="noreferrer"
      className="SocialNetwork__github"
    />
    <a
      href="https://www.linkedin.com/in/jose-francisco-casales-huerta-170735176"
      target="_blank"
      rel="noreferrer"
      className="SocialNetwork__linkedin"
    />
    <a
      href="mailto:jose.casales@outlook.com?subject=Portafolio"
      className="SocialNetwork__mail"
    />
    <a
      href={cv}
      target="_blank"
      rel="noreferrer"
      className="SocialNetwork__curriculum"
    />
  </div>
);

export default SocialNetwork;
