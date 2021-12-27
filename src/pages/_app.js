import { CartContext, CartProvider } from '../contexts/CartContext';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider value={CartContext}>
      <Component {...pageProps} />
    </CartProvider>
  )
};