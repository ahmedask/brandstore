import { render, screen } from '@testing-library/react';
import { products } from '../../data/products';

import Search from '../Search'


describe('Search', () => {
  it('Renders without crashing', () => {
    render(<Search filterProducts={products} />);
    const input = screen.getByTestId('search-input')
    expect(input).toBeInTheDocument();
  });
});
