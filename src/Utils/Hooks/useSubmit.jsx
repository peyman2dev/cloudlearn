import { Radar2 } from "iconsax-react";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { getLogin, getRegister } from "../Redux/Ducks/ducks";

export default function useSubmit({ title, action }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = ({ userInfos }) => {
    setIsLoading(true);
    if (action === "login") {
      dispatch(getLogin({ user: userInfos, setIsLoading }));
    }
    if (action === "register") {
      dispatch(getRegister({
        user: {
          ...userInfos,
          confirmPassword: userInfos.password,
        },
        setIsLoading
      }));
    }
  };

  const Loader = (
    <div className="w-full flex items-center justify-center h-full">
      <span className="animate-spin">
        <Radar2 />
      </span>
    </div>
  );

  const Button = ({ clickHandler }) => (
    <div className="mb-3">
      <button
        type="submit"
        className={`submit-button  ${isLoading ? "is-loading" : ""}`}
        onClick={clickHandler}
      >
        {isLoading ? Loader : title}
      </button>
    </div>
  );

  return {
    isLoading,
    setIsLoading,
    Element: Button,
    loginHandler,
  };
}
