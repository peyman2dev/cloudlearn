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
        return client.get('/auth/me', {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        }).then(response => response.data)
        .then(data => {
            return data
        })
    }
);


export const getLogin = createAsyncThunk(
    "clientReduce/getLogin",
    async ({ user, setLoading }) => {
        console.log(user)
        return client.post('/auth/login', user)
            .then(req => req.data)
            .then(result => result)
            .finally(() => {
                setLoading(false)
            })
    }
)


export const getRegister = createAsyncThunk(
    "clientReduce/getRegister",
    async ({ user, setLoading }) => {
        return client.post('/auth/register', user)
            .then(response => response.data)
            .then(resolve => resolve)
            .finally(() => {
                setLoading(false)
            })
    }
)