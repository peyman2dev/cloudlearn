import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../api/client";

const userToken = localStorage.getItem('token')

export const getCourses = createAsyncThunk(
    "clientReduce/getCourses",
    async () => {
        return client.get('/courses')
            .then(response => response.data)
            .then(data => data)
    }
)


export const getMe = createAsyncThunk(
    "clientReduce/getMe",
    async () => {
        try {
            const headers = {
                Authorization: `Bearer ${userToken}`
            }
            const response = client.get('/auth/me', headers)

            return (await response).data

        } catch (error) {
            console.log(`User Authorization failed.`)
        }
    }
);


export const getLogin = createAsyncThunk(
    "clientReduce/getLogin",
    async ({ user, setIsLoading }) => {
        return client.post('/auth/login', user)
        .then(req => req.data)
        .then(result => result)
        .finally(() => {
            setIsLoading(false)
        })
    }
)
