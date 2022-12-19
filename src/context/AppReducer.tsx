import { Product } from '../interface/products.interface';
import { User } from '../interface/users.interface';
import { CartItem } from '../interface/cart.interface';

export interface AppState {
  isLoggedIn: boolean;
  currentUser: string;
  initialProducts: Product[];
  initialUser: User[];
  cart: CartItem[];
}

export type AppAction =
  | { type: 'SET_LOGGED_IN' }
  | { type: 'SET_CURRENT_USER'; payload: string }
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'SET_INITIAL_USER'; payload: User[] }
  | { type: 'SET_CART'; payload: CartItem }
  | { type: 'SET_CART_AMOUNT'; payload: CartItem[] };

export function AppReducer(state: AppState, action: AppAction) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'SET_LOGGED_IN':
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      };
    case 'SET_PRODUCTS':
      return {
        ...state,
        initialProducts: action.payload,
      };

    case 'SET_INITIAL_USER':
      return {
        ...state,
        initialUser: action.payload,
      };
    case 'SET_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'SET_CART_AMOUNT':
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}
