import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
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
    <CartContext.Provider value={{ cart, handleAddToCart, handleRemoveToCart, clearCart }}>
      {children}
    </CartContext.Provider>
    )
}