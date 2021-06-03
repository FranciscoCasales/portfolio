import React from 'react';
import { CardModel } from '@models/card-model';
import '@styles/components/Card.scss';
import { useWindupString } from 'windups';

const Card = ({ image, alt, desc }: CardModel): JSX.Element => {
  const [windupDesc] = useWindupString(desc, { pace: () => 40 });
  return (
    <div className="Card">
      <img className="Card__image" src={image} alt={alt} />
      <p className="Card__description">{windupDesc}</p>
    </div>
  );
};

export default Card;
