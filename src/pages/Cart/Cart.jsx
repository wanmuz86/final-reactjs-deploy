import React from 'react'
import './Cart.css';
import { useCart } from '../../context/CartContext';
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {
  const { state, dispatch } = useCart();
  return (
    <div className='container py-3'>
      <h2>Cart</h2>
      <hr />
      {
        state.cart.length === 0 
        ? <p>No item in the cart.</p> : 
        state.cart.map(val => <CartItem cartItem={val} key={val.item.id} />)
      }

      <hr />
      <button onClick={() => dispatch({ type: 'EMPTY_CART' })}>Empty Cart</button>
    </div>
  )
}

export default Cart