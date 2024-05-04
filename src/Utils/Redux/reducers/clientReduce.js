import { createSlice } from "@reduxjs/toolkit"
import { getCourses, getLogin, getMe, getRegister } from "../Ducks/ducks"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"


const Toast = Swal.mixin({
    toast: true,
    timer: 2500,
    timerProgressBar: true,
    position: "top-end",
    customClass: "dark:bg-[#262626!important] dark:text-[white!important]",
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
                if (action.payload) {
                    console.log(action.payload)
                    state.user.isLoggedIn = true
                    state.user.userInfos = action.payload
                }

            })
            .addCase(getLogin.fulfilled, (state, action) => {
                Toast.fire({
                    icon: "success",
                    title: "You've logged in successfully",
                    didClose: () => {
                        window.location.pathname = '/'
                    }
                })
                if (action.payload) {
                    localStorage.setItem('token', action.payload.accessToken)
                }
            })
            .addCase(getLogin.rejected, (state, action) => {
                console.log(action)
                Toast.fire({
                    icon: "error",
                    title: "Please check out your information",
                })
            })
            .addCase(getRegister.fulfilled, (state, action) => {
                if (action.payload) {
                    Toast.fire({
                        icon: "success",
                        title: "You've logged in successfully.",
                        didClose: () => {
                            window.location.pathname = '/'
                        }
                    })

                    localStorage.setItem('token', action.payload.accessToken)

                    state.user.isLoggedIn = true
                    state.user.token = action.payload.accessToken
                    state.user.userInfos = action.payload.user
                }
            })
            .addCase(getRegister.rejected, (state, action) => {
                Toast.fire({
                    icon: "error",
                    title: "Please check out your information",
                })
                console.log(action)
            })
    }

})




export default clientReduce.reducer