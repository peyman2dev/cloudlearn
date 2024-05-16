import { Crown, Crown1 } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";
// import ''
export default function Hero() {
  return (
    <section className="mb-[100px]  pt-[100px] relative">
      <div
        className="absolute   top-[0!important]  w-full z-0 h-screen bg-cover"
        style={{
          backgroundImage:
            "url('../../../../../public/images/bgs/overlay-5.png')",
        }}
      ></div>
      <section className="container z-[1] flex relative  min-h-[80vh] items-center justify-center gap-4 flex-col ">

        <div className="hero-title">
          <div className="unlock-icon">
            <Crown variant="Bulk" size={36} />
          </div>
          <div className="text-3xl text-center  sm:text-4xl ">
            <span className="font-Worksans-SemiBold pr-2 text-prime-10">
              Unlock
            </span>
            <span>Your Creative Potential</span>
          </div>
        </div>
        <div className="mt-5">
          <p className="md:text-4xl text-3xl md:text-start text-center font-Worksans-SemiBold">
            With Online Design and Development Courses.
          </p>
        </div>
        <div className="text-xl text-center md:text-start dark:text-dark-70">
          <p>Learn from Industry Experts and Enhance Your Skills.</p>
        </div>
        <div className="mt-5 text-lg child:min-w-max flex items-center gap-3">
          <Link to={"/courses/"} className="button py-3.5 px-4 primary">
            Explore Courses
          </Link>
          <Link
            to={"/pricing/"}
            className="px-5 py-3.5 rounded-lg dark:text-white dark:bg-dark-15 shadow-md bg-white"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </section>
  );
}
