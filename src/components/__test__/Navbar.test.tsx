import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import AppContextProvider from '../../context/AppContext';
import { BrowserRouter } from 'react-router-dom';

const TestNavbar = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </AppContextProvider>
  );
};

describe('Navbar', () => {
  it('Renders without crashing', () => {
    render(<TestNavbar />);
  });

  it('Renders a logo img', () => {
    render(<TestNavbar />);

    const logoElement = screen.getByRole('img');
    expect(logoElement).toBeInTheDocument();
  });

  it('Renders a heading tag with the text Brand Boutique', () => {
    render(<TestNavbar />);
    const titleElement = screen.getByRole('heading');

    expect(titleElement).toHaveTextContent('Brand Boutique');
  });
});