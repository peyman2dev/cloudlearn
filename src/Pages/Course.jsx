import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Reusable/Header/Header";
import CourseMain from "../Components/pages/Course/Main/CourseMain";
import CourseContext from "../Utils/Contexts/CourseContext";
import useCourse from "../Utils/Hooks/useCourse";

export default function Course() {
  const { Provider } = CourseContext;
  const { courseName } = useParams();
  const { course, isLoading } = useCourse(courseName);

  return (
    <>
      {!isLoading && course && (
        <Provider value={{ course }}>
          <Header />
          <CourseMain />
        </Provider>
      )}
    </>
  );
}
