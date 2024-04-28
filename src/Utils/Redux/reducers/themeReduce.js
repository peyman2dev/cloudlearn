import { createSlice } from "@reduxjs/toolkit";

const themeReduce = createSlice({
  name: "themeReduce",
  initialState: { isDark: false },
  reducers: {
    themeToggle: (state, action) => {
      const { setAs } = action.payload
      if (setAs === 'dark') {
        document.documentElement.className = 'dark'
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.className = 'light'
        localStorage.setItem('theme', 'light')
      }
    },
    checkCurrentTheme: (state, action) => {
      const localTheme = localStorage.getItem('theme')
        if (localTheme == 'dark') {
        document.documentElement.className = 'dark'
      } else {
        document.documentElement.className = 'light'
      }
    }
  },
});

export const { themeToggle, checkCurrentTheme } = themeReduce.actions;
export default themeReduce.reducer;
