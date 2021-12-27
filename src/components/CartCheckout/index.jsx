import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import CartItems from './CartItems';
import { Footer } from './style';

const CartCheckout = () => {
  const { cart } = useContext(CartContext);

  return (
    <Footer>
      <ul>
        {cart.map((item, index) => (
          <CartItems 
            key={index}
            itemIndex={index}
            name={item.name}
            price={item.price}
          />
        ))}
      </ul>
    </Footer>
  );
};

export default CartCheckout;
