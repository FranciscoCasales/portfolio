import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from 'frontend/components/Layout';
import setupIntersectionObserverMock from 'frontend/__mocks__/intersectionObserverMock';

describe('<Layout />', () => {
  beforeAll(() => setupIntersectionObserverMock());

  test('Should Layout will render', () => {
    render(
      <Layout>
        <h1>test children</h1>
      </Layout>
    );
    expect(screen.getByText('test children'));
  });
});
