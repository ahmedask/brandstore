import { createContext, useEffect, useReducer } from 'react';
import { AppAction, AppReducer, AppState } from './AppReducer';
import { products } from '../data/products';
import { user } from '../data/user';

const initialState: AppState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') ? JSON.parse(localStorage.getItem('isLoggedIn')!) : false,
  currentUser: '',
  initialProducts: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')!) : products,
  initialUser: user,
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')!) : [],
};

interface AppContextProps {
  state: typeof initialState;
  dispatch: (action: AppAction) => void;
}

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext({} as AppContextProps);

function AppContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(state.initialProducts));
  }, [state.initialProducts]);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
