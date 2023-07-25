import { render, screen } from '@testing-library/react';
import Api from './App';

test('renders learn react link', () => {
  render(<Api />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
