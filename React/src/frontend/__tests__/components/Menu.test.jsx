import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from 'frontend/components/Menu';
import setupIntersectionObserverMock from 'frontend/__mocks__/intersectionObserverMock';

describe('<Menu />', () => {
  beforeAll(() => setupIntersectionObserverMock());

  test('Should Menu will render', () => {
    const renderElemt = render(<Menu />);
    expect(screen.getByText('Hola'));
    expect(screen.getByText('Habilidades'));
    expect(screen.getByText('Experiencia'));
  });
});
