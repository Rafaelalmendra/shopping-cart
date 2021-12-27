import { useState } from 'react';

import Courses from "../components/Courses";
import Navbar from "../components/navBar";
import CartCheckout from "../components/CartCheckout";

const ShoppingCart = () => {
  const [ cart, setCart ] = useState([]);

  const handleAddToCart = (img, name, price) => {
    const itemObject = { img, name, price };
    
    setCart([ ...cart, itemObject ]);
  };

  const handleRemoveToCart = (itemIndex) => {
    const filteredCart = cart.filter( cartItem => cart.indexOf(cartItem) !== itemIndex);
    setCart(filteredCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar cart={cart} clearCart={clearCart} />
      <Courses handleAddToCart={handleAddToCart} />
      <CartCheckout cart={cart} handleRemoveToCart={handleRemoveToCart}/>
    </>
  );
};

export default ShoppingCart;