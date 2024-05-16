import React from "react";
import Login from "../Components/pages/Auth/Login";
import Register from "../Components/pages/Auth/Register";
import { useParams } from "react-router-dom";
import Header from "../Components/Reusable/Header/Header";


export default function Auth() {
  const { action } = useParams();

  return (
    <>
      <Header />
      <section className="w-full min-h-[80vh] gap-20 container  items-center justify-between flex">
        <div className="w-1/2">
          <p className="text-2xl font-Worksans-SemiBold">
            Students Testimonials
          </p>
          <p className="mt-4 text-sm font-Worksans-Regular text-zinc-500">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>

          <article className="mt-10 bg-white dark:bg-dark-15 rounded-lg shadow-sm">
            <div className="p-8">
              <p className="text-zinc-500 text-sm dark:text-zinc-300">
                The web design course provided a solid foundation for me. The
                instructors were knowledgeable and supportive, and the
                interactive learning environment was engaging. I highly
                recommend it!
              </p>
            </div>
            <div className="w-full p-5 px-8 border-t dark:border-white/5 between">
              <div className="flex items-center gap-2">
                <span>
                <img src="../../public/images/user.png" className="w-10" alt="" />
                </span>
                <p className="font-bold">Peyman Ahmadi</p>
              </div>
              <div>
                <button className="button primary px-4 py-2">Road more</button>
              </div>
            </div>
          </article>
        </div>
        {action === "login" ? <Login /> : <Register />}
      </section>
    </>
  );
}
