import React from "react";
import Login from "../Components/pages/Auth/Login";
import Register from "../Components/pages/Auth/Register";
import { useParams } from "react-router-dom";

export default function Auth() {
  const { action } = useParams();

  return (
    <section className="w-full h-screen flex">
      <section className="h-screen flex items-center justify-center w-[50%]">
      {action === "login" ? <Login /> : <Register />}
      </section>
      <div className="min-w-[50%] w-[50%] h-screen relative select-none">
        <img src="../../public/images/galaxy.jpg" alt="" className="absolute w-full h-full object-cover" />
        <span id="auth-bg-layer" className="absolute z-[1] w-full h-full bg-gradient-to-r dark:from-dark-10 dark:to-dark-10/10   dark:via-dark-10/50"></span>
      </div>
    </section>
  );
}
