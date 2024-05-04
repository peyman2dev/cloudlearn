import React from "react";
import Brands from "../Brands/Brands";
import Benefits from "../Benefits/Benefits";
import Courses from "../Courses/Courses";
import Testimonials from "../Testimonials/Testimonials";

export default function Main() {
  return (
    <main className="w-[90%] mx-auto relative  lg:w-full">
      <Brands />
      <Benefits />
      <Courses />
      <Testimonials />
    </main>
  );
}
