import Auth from "../../Pages/Auth";
import Course from "../../Pages/Course";
import Home from "../../Pages/Home";

const _routes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/auth/:action",
    element: <Auth />
  },
  {
    path: "/course/:courseName",
    element: <Course />
  }
];

export default _routes