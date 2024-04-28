import { createSlice } from "@reduxjs/toolkit";

const themeReduce = createSlice({
  name: "themeReduce",
  initialState: { isDark: false },
  reducers: {
    themeToggle: (state, action) => {
      const { setAs } = action.payload
      if (setAs === 'dark') {
        document.documentElement.className = 'dark'
        state.isDark = true
        localStorage.setItem('theme', 'dark')
      } else {
        state.isDark = false
        document.documentElement.className = 'light'
        localStorage.setItem('theme', 'light')
      }
    },
    checkCurrentTheme: (state, action) => {
      const localTheme = localStorage.getItem('theme')
      if (localTheme == 'dark') {
        state.isDark = true
        document.documentElement.className = 'dark'
      } else {
        state.isDark = false
        document.documentElement.className = 'light'
      }
    }
  },
});

export const { themeToggle, checkCurrentTheme } = themeReduce.actions;
export default themeReduce.reducer;
