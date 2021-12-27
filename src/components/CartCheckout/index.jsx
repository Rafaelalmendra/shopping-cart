import CartItems from './CartItems';
import { Footer } from './style';

const CartCheckout = ({ cart, handleRemoveToCart }) => {
  return (
    <Footer>
      <ul>
        {cart.map((item, index) => (
          <CartItems 
            key={index}
            itemIndex={index}
            name={item.name}
            price={item.price}
            handleRemoveToCart={handleRemoveToCart}
          />
        ))}
      </ul>
    </Footer>
  );
};

export default CartCheckout;
