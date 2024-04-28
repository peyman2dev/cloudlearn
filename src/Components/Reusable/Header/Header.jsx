import React from "react";
import Mob from "./Mob/Mob";
import Win from "./Win/Win";

export default function Header() {
  return (
    <header className="lg:mt-6">
      <Mob />
      <Win />
    </header>
  );
}
