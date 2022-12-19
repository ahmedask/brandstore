import { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { CartItem } from '../interface/cart.interface';
import { Product } from '../interface/products.interface';
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";

function Cart() {
  const { state, dispatch } = useContext(AppContext);
  const cart = state.cart && state?.cart;
  let products = state && state?.initialProducts;
  
  const totalPrice = cart.reduce((total: number, item: CartItem) => {
    return total + item.price * item.amount;
  }, 0);

  const storageCart = JSON.parse(localStorage.getItem('cart')!)

  function removeItem(item: CartItem) {
    const updatedCart = storageCart.map((cartItem: CartItem, index: number) => {
                             
      if(cartItem.productName === item.productName) {
        products.forEach((product: Product) => {
          if (product.id === item.id) {
            return {
              ...product,
              inStock: product.quantity++,
            };
          }
          return item;
        });
    
        localStorage.setItem('products', JSON.stringify(products));

        storageCart.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(storageCart));
      }
    })

    window.location.reload();
    return updatedCart
  }

  
  const handleAddToCart = (item: CartItem) => {
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

  useEffect(() => {
  }, [storageCart, state])
  

  return (
    <div className='cartContainer'>
      {cart.length === 0 ? <h1>Cart is currently empty.</h1> : <h1>Cart</h1>}
      {cart.map((item: CartItem) => (
        <div key={item.id} className='cartItemContainer' data-testid={'cart-item-card'}>
        <div className='cartItemImgContainer'>
          <img src={item.img} alt={item.productName} width="100" />
        </div>
        <div className='productNameContainer'>
          <h1>{item.productName}</h1>
          <div className='counterContainer'>
          <button disabled={item.quantity === 0} className="cartBtn" onClick={() => handleAddToCart(item)}>
            <IoIosAddCircle />
          </button>
            <p>{item.quantity > 0 ? item.quantity : 'not in stock'}</p>
            <button className="cartBtn" onClick={() => removeItem(item)}>
            <IoIosRemoveCircle />
          </button>
          </div>
        </div>
        <div className='cartItemPriceContainer'>
          <h1>${item.price}</h1>
        </div>
      <hr />
      </div>
      ))}
      {cart.length > 0 ? <h1 data-testid="total-price-element">Total: ${totalPrice.toFixed(2)}</h1> : null}
    </div>
  );
}

export default Cart;