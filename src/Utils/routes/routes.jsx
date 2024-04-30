import Auth from "../../Pages/Auth";
import Home from "../../Pages/Home";

const _routes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/auth/:action",
    element: <Auth />
  }
];

export default _routes