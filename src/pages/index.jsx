import Courses from "../components/Courses";
import Navbar from "../components/navBar";
import CartCheckout from "../components/CartCheckout";

const ShoppingCart = () => {
  return (
    <>
      <Navbar />
      <Courses />
      <CartCheckout />
    </>
  );
};

export default ShoppingCart;