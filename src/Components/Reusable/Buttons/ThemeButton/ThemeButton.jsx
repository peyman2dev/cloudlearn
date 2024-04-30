import { Moon, Sun1 } from "iconsax-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeToggle } from "../../../../Utils/Redux/reducers/themeReduce";

export default function ThemeButton() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { isDark } = useSelector((state) => state.theme);

  window.onclick = (event) => {
    show ? setShow(false) : "";
  };

  const themeBtnHandler = (e) => {
    e.stopPropagation();
    setShow(!show);
  };

  const setThemeTo = (selectedTheme) => {
    dispatch(themeToggle({ setAs: selectedTheme }));
  };

  return (
    <div className="rounded-lg relative z-20">
      <button onClick={(event) => themeBtnHandler(event)} className="p-3">
        {isDark ? <Moon /> : <Sun1 />}
      </button>
      <div
        className={`top-[80%] p-1 right-2/4 dark:bg-dark-15 bg-white dark:text-sky-200 dark:border-white/10 border min-w-[90px]  text-blue-500 child:duration-150 child-hover:bg-sky-500/5 child:py-2.5 child:rounded-md child:px-8  absolute z-[50!important]  rounded-lg duration-200 ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        <button
          onClick={() => setThemeTo("light")}
          className="flex items-center gap-2"
        >
          <span>
            <Sun1 size={21} className="" />
          </span>
          <span>Light</span>
        </button>
        <button
          onClick={() => setThemeTo("dark")}
          className="flex items-center gap-2"
        >
          <span>
            <Moon size={21} className="" />
          </span>
          <span>Dark</span>
        </button>
      </div>
    </div>
  );
}
