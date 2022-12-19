import React from 'react'
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { Product } from '../interface/products.interface';
import { CartItem } from '../interface/cart.interface';

function Card({ item }: any) {
  const { state, dispatch } = useContext(AppContext);

  const handleAddToCart = () => {
    let products = state && state?.initialProducts;
    const product = products.find((product: Product) => product.id === item.id)!;
    const cartItem: CartItem = { ...product, amount: 1, quantity: item.quantity - 1 };


    products.map((product: Product) => {
      if (product.id === item.id) {
        return {
          ...product,
          inStock: item.quantity--,
        };
      }
      return item;
    });

    localStorage.setItem('products', JSON.stringify(products));

    dispatch({
      type: 'SET_CART',
      payload: cartItem,
    });

    dispatch({
      type: 'SET_PRODUCTS',
      payload: products,
    });

  }

  React.useEffect(() =>{

  },[state?.initialProducts])

  return (
    <div className='card'>
        <div className='imgWrapper'>
            <img src={item.img} alt='shoes'/>
        </div>
        <div className='imgInfo'>
            <p><b>{item.productName}</b></p>
            <p><b>{`${item.currency}${item.price}`}</b> ({`${item.quantity} In Stock`})</p>
        </div>
            <button disabled={item?.quantity === 0} className='addToCartBtn' onClick={handleAddToCart}>{item?.quantity === 0 ? 'Product not in stock' : 'Add to Cart'}</button>
    </div>
  )
}

export default Card