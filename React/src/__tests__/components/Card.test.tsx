import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '@components/Card';
import { CardModel } from '@models/card.model';

describe('<Card />', () => {
  const cardData: CardModel = {
    id: 1,
    desc: 'test card',
    alt: 'test card alt',
    image: 'image',
  };

  test('Should Card will render', () => {
    render(<Card {...cardData} />);
    expect(screen.getByAltText('test card alt'));
  });
});
