import React from "react";
import Mob from "./Mob/Mob";
import Win from "./Win/Win";
import Hero from "../../pages/home/Hero/Hero";

export default function Header() {
  return (
    <header className="lg:my-6">
      <section className="relative z-10 container">
        <Mob />
        <Win />
      </section>
      <div
        className="absolute   top-[0!important]  w-full z-0 h-screen bg-cover"
        style={{
          backgroundImage:
            "url('../../../../../public/images/bgs/overlay-5.png')",
        }}
      ></div>
      <Hero />
    </header>
  );
}
