import { createSlice } from "@reduxjs/toolkit"
import { getCourses, getMe } from "../Ducks/ducks"

const clientReduce = createSlice({
    name: "clientReduce",
    initialState: {
        courses: [],
        categories: [],
        menus: [],
        user: {
            isLoggedIn: false,
            token: null,
            userInfos: {}
        }
    },


    extraReducers: builder => {
        builder
            .addCase(getCourses.fulfilled, (state, action) => {
                if (action.payload) {
                    state.courses = action.payload
                }
            })
            .addCase(getMe.fulfilled, (state, action) => {
                if (action.payload) {

                }
                state.user.isLoggedIn = false
                state.user.token = null
            })

    }

})




export default clientReduce.reducer