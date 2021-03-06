import { useContext } from 'react';
import { CartContext } from '../../../contexts/CartContext';

import { Card } from '../style';

const CourseCard = ({ id, img, name, price }) => {
  const { handleAddToCart } = useContext(CartContext);

  return (
    <Card key={id}>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img src={img} alt="" />
      <h1>{name}</h1>
      <span>Preço: R$ {price}</span>
      <button onClick={() => handleAddToCart(img, name, price)}>ADICIONAR</button>
    </Card>
  );
};

export default CourseCard;
