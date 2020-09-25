import React from 'react';
import { render } from '@testing-library/react';
import { ClockWrapper } from './ClockWrapper';

test('renders learn react link', () => {
  const { getByText } = render(<ClockWrapper />);
  const linkElement = getByText(/Hello/i);
  expect(linkElement).toBeInTheDocument();
});
