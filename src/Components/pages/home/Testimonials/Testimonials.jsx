import React from "react";
import SectTitle from "../../../Reusable/SectTitle/SectTitle";
import Card from "./Card/Card";

export default function Testimonials() {
  return (
    <section className="container my-[150px]">
      <SectTitle title={"Our Testimonials"} url={"/our-testimonials"}>
        <div element-type="caption">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          veritatis ipsam magnam.
        </div>
      </SectTitle>

      <section className="grid gap-8 md:grid-cols-2 mt-[80px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </section>
  );
}
