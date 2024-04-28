import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReduce from "../reducers/themeReduce";

const baseReducers = combineReducers({
  theme: themeReduce,
});

const store = configureStore({
  reducer: baseReducers,
});

export default store;
