import React from "react";
import Hero from "../Hero/Hero";
import Brands from "../Brands/Brands";
import Benefits from "../Benefits/Benefits";
import Courses from "../Courses/Courses";

export default function Main() {
  return (
    <main className="w-[90%] mx-auto relative  lg:w-full">
      <div className="absolute   top-[0!important]  w-full z-0 h-screen bg-cover"  style={{backgroundImage: "url('../../../../../public/images/bgs/overlay-3.png')"}}></div>

      <Hero />
      <Brands />
      <Benefits />
      <Courses />
    </main>
  );
}
