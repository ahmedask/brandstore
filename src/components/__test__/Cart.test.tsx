import { render, screen } from '@testing-library/react';
import { AppContext } from '../../context/AppContext';
import { AppState } from '../../context/AppReducer';
import Cart from '../Cart'

const productImg = 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'

const state: AppState = {
    isLoggedIn: false,
    currentUser: '',
    initialProducts: [],
    initialUser: [],
    cart: [{
        id: 1,
        img: productImg,
        productName: 'Nike Huarache',
        price: 90,
        currency: '$',
        quantity: 2,
        amount: 1
      }],
};

const contextValue = { state, dispatch: () => {} };
const TestCart = <AppContext.Provider value={contextValue}><Cart /></AppContext.Provider>

describe('Cart', () => {
  it('Renders without crashing', () => {
    
    
    render(TestCart);
  });

  it('Should render empty cart', () => {
    const state: AppState = {
        isLoggedIn: false,
        currentUser: '',
        initialProducts: [],
        initialUser: [],
        cart: [],
    };
    render(<AppContext.Provider value={{ state, dispatch: () => {} }}><Cart /></AppContext.Provider>);

    const emptyCartHeading = screen.getByRole('heading');
    expect(emptyCartHeading).toHaveTextContent('Cart is currently empty.');

  });

  it('Should render a img', () => {
    render(TestCart);

    const imgElement = screen.getByRole('img');

    expect(imgElement).toHaveAttribute('src', `${productImg}`);
  });

  it('Should render total price', () => {
    render(TestCart);

    const totalPrice = screen.getByTestId('total-price-element');
    
    expect(totalPrice).toHaveTextContent(`$${90}`);
  });

});
