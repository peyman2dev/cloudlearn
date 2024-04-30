import React from "react";
import Hero from "../Hero/Hero";
import Brands from "../Brands/Brands";
import Benefits from "../Benefits/Benefits";
import Courses from "../Courses/Courses";

export default function Main() {
  return (
    <main className="w-[90%] mx-auto relative  lg:w-full">
      <Brands />
      <Benefits />
      <Courses />
    </main>
  );
}
