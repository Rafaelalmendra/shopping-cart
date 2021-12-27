import CourseCard from "./CourseCard";
import { Main } from './style';

import { courses } from "../../database";

const Courses = ({ handleAddToCart }) => {
  return (
    <Main>
      <section>
        {courses.map((course) => (
          <CourseCard 
            key={course.id}
            img={course.img}
            price={course.price}
            name={course.name}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </section>
    </Main>
  );
};

export default Courses;
