import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkCurrentTheme } from "../Redux/reducers/themeReduce";

export default function useRedux() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkCurrentTheme())
  }, []);

  return false;
}
