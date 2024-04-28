import React from "react";
import { Link } from "react-router-dom";
import SectTitle from "../../../Reusable/SectTitle/SectTitle";
export default function Courses() {
  return (
    <section className="my-[200px] container">
      <SectTitle title="Courses" url="/courses/">
        <div element-type="caption">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </div>
      </SectTitle>
    </section>
  );
}
