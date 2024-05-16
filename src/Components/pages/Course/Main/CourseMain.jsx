import React, { useContext, useEffect } from "react";
import CourseContext from "../../../../Utils/Contexts/CourseContext";

export default function CourseMain() {
  const { course } = useContext(CourseContext);

  return (
    <main className="container my-[100px]">
      <section className="between child:min-h-[600px] child:w-1/2">
        <div>
          <h1>{course.name}</h1>
        </div>
        <div className="min-h-[50vh]">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={`${course.cover}`}
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
}
