import React from "react";
import { useRoutes } from "react-router-dom";
import _routes from "./Utils/routes/routes";
import useRedux from "./Utils/Hooks/useRedux";

export default function App() {
  const dispatchs = useRedux();
  const application = useRoutes(_routes);
  return application;
}
