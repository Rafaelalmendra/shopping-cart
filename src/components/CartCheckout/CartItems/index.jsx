import { Li } from '../style';

const CartItems = ({ name, price, itemIndex, handleRemoveToCart }) => {
  return (
    <Li>
      <h2>{name}</h2>
      <span>R$ {price}</span>
      <button onClick={() => handleRemoveToCart(itemIndex)}>REMOVER</button>
    </Li>
  );
};

export default CartItems;