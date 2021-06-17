import React from 'react';
import { render, screen } from '@testing-library/react';
import Brand from '@components/Brand';

describe('<Brand />', () => {
  test('Should brand will render', () => {
    render(<Brand />);
    expect(screen.getByText('Casales'));
  });
});
