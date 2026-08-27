import { courses } from "../data/courses"
import CourseCard from "./CourseCard"

function CourseList() {
    return (
        <div className="courses">
            {/* course card */}
            {
                courses.map((course)=>(
                    <CourseCard
                    key={course.id}
                    title={course.title}
                    das={course.dascription}
                    image={course.image_url}
                    price={course.price}

                    />
                ))
            }
        </div>
    )
}

export default CourseList