import CourseCard from "./CourseCard";
import { Main } from './style';

const Courses = () => {
  return (
    <Main>
      <section>
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </section>
    </Main>
  );
};

export default Courses;
