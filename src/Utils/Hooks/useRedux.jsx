import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkCurrentTheme } from "../Redux/reducers/themeReduce";
import { getCourses, getMe } from "../Redux/Ducks/ducks";

export default function useRedux() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(checkCurrentTheme());
    dispatch(getCourses());
    dispatch(getMe());
  }, []);

  return false;
}
