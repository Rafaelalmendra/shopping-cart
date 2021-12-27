import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Header } from './style';

const Navbar = () => {
  const { cart, clearCart } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);

  return (
    <Header>
      <nav>
        <h2>CUR<strong>SOS</strong></h2>
        <div className="actions">
          <div className="total">
            <span>
              {cart.length} {cart.length === 1 ? 'Curso' : 'Cursos'}
            </span>
            <span><strong>R$ {totalPrice.toFixed(2)}</strong></span>
          </div>
          <button onClick={clearCart}>Limpar</button>
        </div>
      </nav>        
    </Header>
  );
};

export default Navbar;

