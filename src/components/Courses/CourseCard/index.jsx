import { Card } from '../style'

const CourseCard = () => {
  return (
    <Card>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img src="/images/reactjs.svg" alt="" />
      <h1>Reactjs</h1>
      <button>ADICIONAR</button>
    </Card>
  );
};

export default CourseCard;
