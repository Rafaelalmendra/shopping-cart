import { Header } from './style';

const Navbar = () => {
  return (
    <Header>
      <nav>
        <h2>CUR<strong>SOS</strong></h2>
        <div className="actions">
          <div className="total">
            <span>2 cursos</span>
            <span><strong>R$ 82.00</strong></span>
          </div>
          <button>Limpar</button>
        </div>
      </nav>        
    </Header>
  );
};

export default Navbar;

