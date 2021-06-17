import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@components/Footer';

describe('<Footer />', () => {
  test('Should footer will render', () => {
    render(<Footer />);
    expect(screen.getByTestId('Footer'));
  });
});
