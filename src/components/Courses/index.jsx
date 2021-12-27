import CourseCard from "./CourseCard";
import { courses } from "../../database";

import { Main } from './style';

const Courses = () => {
  return (
    <Main>
      <section>
        {courses.map((course) => (
          <CourseCard 
            key={course.id}
            img={course.img}
            price={course.price}
            name={course.name}
          />
        ))}
      </section>
    </Main>
  );
};

export default Courses;
