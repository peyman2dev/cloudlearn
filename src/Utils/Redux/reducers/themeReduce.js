import { createSlice } from "@reduxjs/toolkit";

const themeReduce = createSlice({
  name: "themeReduce",
  initialState: { isDark: false },
  reducers: {
    themeToggle: (state, action) => {
      console.log(action);
    },
  },
});

export const { themeToggle } = themeReduce.actions;
export default themeReduce.reducer;
