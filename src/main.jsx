import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../public/css/tailwind.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./Utils/Redux/store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
