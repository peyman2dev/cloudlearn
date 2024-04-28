import React from "react";
import { Link, NavLink } from "react-router-dom";
import isActived from "../../../../Utils/Functions/isActived";
import ThemeButton from "../../Buttons/ThemeButton/ThemeButton";
export default function Win() {
  return (
    <nav className="hidden invisible lg:visible container h-14 rounded-lg lg:flex items-center justify-between ">
      <div className="flex items-center gap-7">
        <div>
          <Link to={"/"}>
            <img
              src="'../../../../../public/images/logo.jfif"
              alt="logo"
              className="w-12 rounded-lg"
            />
          </Link>
        </div>
        <ul className="flex items-center gap-5">
          <li>
            <NavLink to={"/"} className={isActived()}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/courses"} className={isActived()}>
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to={"/pricing"} className={isActived()}>
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to={"/abous-us"} className={isActived()}>
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className={isActived()}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <ThemeButton />
        <Link
          className="px-5 text-white bg-prime-10 pb-2 py-1.5 rounded-lg"
          to={"/auth/login"}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
