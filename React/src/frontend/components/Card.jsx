import React from 'react';
import 'frontend/styles/components/Card.scss';

const Card = ({ image, alt, desc }) => (
  <div className="Card">
    <img src={image} alt={alt} />
    <p className="Card__description">{desc}</p>
  </div>
);

export default Card;
