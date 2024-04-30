import { Crown, Crown1 } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";
// import ''
export default function Hero() {
  return (
    <section className="mb-[100px] h-[80vh] pt-[100px] relative flex items-center justify-center gap-4 flex-col container" >
      <div className="px-6 shadow-sm py-3 flex-wrap justify-center md:justify-start font-Worksans-Medium rounded-md bg-white dark:bg-dark-15 items-center flex gap-4">
        <div className="w-14 h-14 dark:bg-dark-20 shadow-sm  border dark:border-white/5 border-prime-10/20 select-none pb-1 flex items-center justify-center rounded-md text-prime-10 bg-prime-50">
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
        <Link
          to={"/courses/"}
          className="button primary"
        >
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
  );
}
