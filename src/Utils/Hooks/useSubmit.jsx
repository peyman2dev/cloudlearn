import { Radar2 } from "iconsax-react";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { getLogin } from "../Redux/Ducks/ducks";

export default function useSubmit({ title }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const loginHandler = ({ userInfos }) => {
    dispatch(getLogin({user: userInfos, setIsLoading}))
    setIsLoading(true);
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
