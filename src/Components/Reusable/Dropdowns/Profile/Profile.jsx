import {
  Diamonds,
  Folder2,
  Logout,
  MessageEdit,
  Teacher,
  User,
} from "iconsax-react";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Profile() {
  const [show, setShow] = useState(false);
  const user = useSelector((state) => state.client.user.userInfos);

  const dropdownRef = useRef();

  window.onclick = () => {
    const elemID = dropdownRef.current.id;
    if (elemID === elemID && show) {
      setShow(false);
    }
  };
  return (
    <div className="relative">
      <button
        onClick={(event) => {
          event.stopPropagation();
          setShow(!show);
        }}
        className="w-10 h-10 relative z-[11] rounded-full"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsbG3WjTvP0dl7gg36khwzuX2_ME42mr8PE3OnH37qA&s"
          className="w-full h-full object-cover overflow-hidden rounded-full"
          alt=""
        />
      </button>
      <section
        ref={dropdownRef}
        className={`absolute w-[300px] z-[11] top-[130%] bg-white shadow-lg duration-150 p-4 rounded-lg right-0 dark:bg-dark-15 ${
          show ? "" : "opacity-0 invisible"
        }`}
        id="profile-dropdown"
      >
        <header className=" pb-2 dark:border-b-white/10 border-b flex items-center gap-3">
          <div className="w-10 h-10 rounded-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIsbG3WjTvP0dl7gg36khwzuX2_ME42mr8PE3OnH37qA&s"
              className="w-full h-full object-cover overflow-hidden rounded-full"
              alt=""
            />
          </div>
          <div>
            <p className="font-Worksans-Medium">{user.name}</p>
            <div className="text-sm">
              {user.role === "USER" ? (
                <span className="text-zinc-400">Student</span>
              ) : (
                <div className="flex items-center text-prime-10 gap-1 font-Worksans-SemiBold">
                  <span>
                    <Teacher  size={18}/>
                  </span>
                  <span>Teacher</span>
                </div>
              )}
            </div>
          </div>
        </header>
        <main className="border-b pb-2 dark:border-b-white/10 mt-2 child:h-10 child:duration-150 child-hover:bg-slate-50 child-hover:dark:bg-dark-30/10 child:rounded-lg child:px-4 child:flex child:items-center child:gap-2 space-y-0.5">
          <Link to={"/my-account/"}>
            <span>
              <User size={21} className="text-dark-10 dark:text-dark-60" />
            </span>
            <span>Edit profile</span>
          </Link>
          <Link to={"/my-account/courses"}>
            <span>
              <Folder2 size={21} className="text-dark-10 dark:text-dark-60" />
            </span>
            <span>Courses</span>
          </Link>
          <Link to={"/my-account/tickets"}>
            <span>
              <MessageEdit
                size={21}
                className="text-dark-10 dark:text-dark-60"
              />
            </span>
            <span>Tickets</span>
          </Link>
          <Link to={"/my-account/subscription"}>
            <span>
              <Diamonds size={21} className="text-dark-10 dark:text-dark-60" />
            </span>
            <span>Subscription</span>
          </Link>
        </main>
        <footer className="mt-2">
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
            className="px-4 h-10 flex hover:bg-slate-50 items-center gap-2 w-full duration-150 hover:dark:bg-dark-30/10 rounded-lg"
          >
            <span className="text-dark-10 dark:text-dark-60">
              <Logout />
            </span>
            <span>Logout</span>
          </button>
        </footer>
      </section>

      <div
        className={`fixed w-full h-screen z-[10] bg-black/40 backdrop-blur-sm top-0 left-0 duration-150 ${
          show ? "" : "opacity-0 invisible"
        }`}
      ></div>
    </div>
  );
}
