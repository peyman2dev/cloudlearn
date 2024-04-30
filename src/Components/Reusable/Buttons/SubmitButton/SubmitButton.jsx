import { Educare } from "iconsax-react";
import React, { useState } from "react";
import Tooltip from "../../Tooltip/Tooltip";

export default function SubmitButton({ value }) {
  const [isLoading, setIsLoading] = useState(false);

  const Loader = (
    <span className="animate-spin text-2xl w-full flex items-center justify-center text-black">
      <Educare />
    </span>
  );

  const clickHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <button
      onClick={() => clickHandler()}
      type="submit"
      className={`submit-button ${isLoading ? "is-loading" : ""}`}
      disabled={isLoading}
    >
      {isLoading ? Loader : value}
    </button>
  );
}
