import React from 'react';
import { render, screen } from '@testing-library/react';
import Brand from 'frontend/components/Brand';

describe('<Brand />', () => {
  test('Should brand will render', () => {
    render(<Brand />);
    expect(screen.getByText('Casales'));
  });
});
