import React from "react";
import { Link } from "react-router-dom";
import Benefit from "./Benefit/Benefit";
import _ from "lodash";
import SectTitle from "../../../Reusable/SectTitle/SectTitle";

export default function Benefits() {
  const benefits = [
    {
      id: 1,
      title: "Flexible Learning Schedule",
      content:
        "Fit your coursework around your existing commitments and obligations.",
    },
    {
      id: 2,
      title: "Expert Instruction",
      content:
        "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      id: 3,
      title: "Diverse Course Offerings",
      content:
        "Explore a wide range of design and development courses covering various topics.",
    },
    {
      id: 4,
      title: "Updated Curriculum",
      content:
        "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      id: 5,
      title: "Practical Projects and Assignments",
      content:
        "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      id: 6,
      title: "Interactive Learning Environment",
      content:
        "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];
  return (
    <section className=" relative  my-[140px]">
      <div
        className="absolute   top-[0!important]  w-full z-0 h-screen bg-cover"
        style={{
          backgroundImage:
            "url('../../../../../public/images/bgs/overlay-5.png')",
        }}
      ></div>
      <section className="container">
        <SectTitle title={"Benefits"} url={"/benefits"}>
          <div element-type="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus adipisci saepe, optio doloremque consequatur natus
            quaerat. Laborum sequi nam aliquid expedita eos autem maiores.
          </div>
        </SectTitle>
        <section className="mt-10 md:grid-cols-3 sm:grid-cols-2 grid gap-4 ">
          {_.map(benefits, (benefit, index) => (
            <Benefit
              title={benefit.title}
              content={benefit.content}
              key={index}
              index={index + 1}
            />
          ))}
        </section>
      </section>
    </section>
  );
}
