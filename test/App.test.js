import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/components/App';

test('renders React App', () => {
  render(<App/>);
  const headerElement = screen.getByText(/React App/i);
  expect(headerElement).toBeInTheDocument();
});