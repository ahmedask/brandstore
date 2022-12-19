import { Product } from './products.interface';

export interface CartItem extends Product {
    amount: number;
    id: number;
    img: string;
    productName: string;
    price: number;
    currency: string;
    quantity: number;
  }