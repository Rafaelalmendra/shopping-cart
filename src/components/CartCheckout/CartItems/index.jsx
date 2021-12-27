import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';

import { Li } from '../style';

const CartItems = ({ name, price, itemIndex }) => {
  const { handleRemoveToCart } = useContext(CartContext);

  return (
    <Li>
      <h2>{name}</h2>
      <span>R$ {price}</span>
      <button onClick={() => handleRemoveToCart(itemIndex)}>REMOVER</button>
    </Li>
  );
};

export default CartItems;