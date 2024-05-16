import { createSlice } from "@reduxjs/toolkit"
import { getCourses, getLogin, getMe, getRegister } from "../Ducks/ducks"
import useSwal from "../../Hooks/useSwal"

const Swal = useSwal()



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
                    state.user.isLoggedIn = true
                    state.user.userInfos = action.payload
                }

            })
            .addCase(getLogin.fulfilled, (state, action) => {
              Swal.Toast.fire({
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
              Swal.Toast.fire({
                    icon: "error",
                    title: "Please check out your information",
                })
            })
            .addCase(getRegister.fulfilled, (state, action) => {
                if (action.payload) {
                  Swal.Toast.fire({
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
              Swal.Toast.fire({
                    icon: "error",
                    title: "Please check out your information",
                })
                console.log(action)
            })
    }

})




export default clientReduce.reducer