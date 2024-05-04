import React from "react";
import { useDispatch } from "react-redux";
import { getLogin } from "../Redux/Ducks/ducks";

export default function useSubmit() {
  const dispatch = useDispatch();
  const Button = ({ title, disabled }) => {
    return (
      <button
        disabled={disabled}
        type="submit"
        className={`submit-button ${disabled ? "is-loading" : ""} `}
      >
        {title}
      </button>
    );
  };

  const submitHandler = ({ action }) => {
    dispatch(action);
  };

  return {
    Button,
    submitHandler,
  };
}
