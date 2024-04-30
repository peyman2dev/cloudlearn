import { createSlice } from "@reduxjs/toolkit"
import { getCourses, getLogin, getMe, getRegister } from "../Ducks/ducks"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"


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
                if (action.payload) {
                console.log(action.payload)
                    state.user.isLoggedIn = true
                    state.user.userInfos = action.payload
                }
 
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
                    "title": "Registeration failed ..",
                    "text": "Checkout the console..",
                    "icon": "error"
                })
                console.log(action)
            })
    }

})




export default clientReduce.reducer