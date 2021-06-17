import React from 'react';
import { CardModel } from '@models/card.model';
import '@styles/components/Card.scss';

const Card = ({ image, alt, desc }: CardModel): JSX.Element => (
  <div className="Card">
    <img src={image} alt={alt} />
    <p className="Card__description">{desc}</p>
  </div>
);

export default Card;
