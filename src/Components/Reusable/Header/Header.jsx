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

    </header>
  );
}
