import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from '../LoginForm'

const Login = 
<BrowserRouter>
    <LoginForm userInfo={''} username={''} password={'password'} setUserName={undefined} setPassword={undefined} onSubmit={undefined} sigIn={false} warn={''}/>
</BrowserRouter>
describe('Login', () => {
  it('Renders without crashing', () => {
    render(Login);
    const h2Element = screen.getByRole('heading');
    expect(h2Element).toHaveTextContent('Sign In');
  });

  it('Should render a username input', () => {
    render(Login);

    const buttonElement = screen.getByTestId('user-field');

    expect(buttonElement.getAttribute('placeholder')).toBe('Username');
  });

  it('Should render a password input', () => {
    render(Login);

    const buttonElement = screen.getByTestId('pass-field');

    expect(buttonElement.getAttribute('placeholder')).toBe('Password');
  });

  it('Should render a btn with the text Sign In', () => {
    render(Login);

    const buttonElement = screen.getByTestId('btn-sign-in');

    expect(buttonElement.getAttribute('value')).toBe('Sign In');
  });
});
