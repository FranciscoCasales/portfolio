import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from 'frontend/components/Header';
import setupIntersectionObserverMock from 'frontend/__mocks__/intersectionObserverMock';

describe('<Header />', () => {
  beforeAll(() => setupIntersectionObserverMock());

  test('Should Header will render', () => {
    render(<Header />);
    expect(screen.getByText('Hola'));
  });
});
