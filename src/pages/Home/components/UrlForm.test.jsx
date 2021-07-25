import { render, screen } from '@testing-library/react';
import React from 'react';
import UrlForm from './UrlForm';

const setup = () => {
  const mockSetLongUrl = jest.fn();
  return { mockSetLongUrl };
};

describe('UrlForm', () => {
  const { mockSetLongUrl } = setup();
  it('should render', async () => {
    render(<UrlForm setLongUrl={mockSetLongUrl} />);
    screen.getByTestId('UrlForm');
  });
});
