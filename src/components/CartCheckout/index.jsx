import CartItems from './CartItems';
import { Footer } from './style';

const CartCheckout = () => {
  return (
    <Footer>
      <ul>
        <CartItems />
        <CartItems />
        <CartItems />
      </ul>
    </Footer>
  );
};

export default CartCheckout;
