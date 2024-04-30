import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReduce from "../reducers/themeReduce";
import clientReduce from "../reducers/clientReduce";

const baseReducers = combineReducers({
  theme: themeReduce,
  client: clientReduce
});

const store = configureStore({
  reducer: baseReducers,
});

export default store;
