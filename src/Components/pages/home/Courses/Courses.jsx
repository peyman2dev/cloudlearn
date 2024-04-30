import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SectTitle from "../../../Reusable/SectTitle/SectTitle";
import client from "../../../../Utils/api/client";
import { useSelector } from "react-redux";
import _ from "lodash";
import CourseCard from "../../../Reusable/CourseCard/CourseCard";
export default function Courses() {
  const { courses } = useSelector((state) => state.client);

  return (
    <section className="my-[200px] container">
      <SectTitle title="Courses" url="/courses/">
        <div element-type="caption">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </div>
      </SectTitle>
      <section className="mt-10 grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {_.slice(courses, 0, 4).map((course, index) => (
          <CourseCard {...course} key={index} />
        ))}
      </section>
    </section>
  );
}
