import { createSlice } from "@reduxjs/toolkit"
import { getCourses, getLogin, getMe } from "../Ducks/ducks"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
    toast: true,
    timer: 2500,
    timerProgressBar: true,
    position: "top-end",
    customClass: "dark:bg-[#262626!important] text-[white!important]",
    showConfirmButton: false
})

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
                state.user.isLoggedIn = false
                state.user.token = null
            })
            .addCase(getLogin.fulfilled, (state, action) => {
                console.log(action)
            })
            .addCase(getLogin.rejected, (state, action) => {
                console.log(action)
                Toast.fire({
                    icon: "error",
                    title: "Something went wrong",
                })
            })
    }

})




export default clientReduce.reducer