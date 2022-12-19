import { render, screen } from '@testing-library/react';
import Card from '../Card'

const productImg = 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'

const item = {
    img: productImg,
    productName: 'Nike Huarache',
    price: '$90'
  }
describe('Card', () => {
  it('Renders without crashing', () => {
    render(<Card item={item} />);
  });

  it('Should render a img', () => {
    render(<Card item={item} />);

    const imgElement = screen.getByRole('img');

    expect(imgElement).toHaveAttribute('src', `${productImg}`);
  });

  it('Should render a paragraph with the text Nike Huarache', async () => {
    render(<Card item={item} />);

    const product = screen.getByText(/Nike/);
    expect(product).toHaveTextContent('Nike Huarache');
  });

  it('Should render a btn with the text add to cart', () => {
    render(<Card item={item} />);

    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toHaveTextContent('Add to Cart');
  });
});
