import axios from 'axios';
import { URL_USER } from '../api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAsyncUsers = createAsyncThunk(
    "usersList/fetchAsyncUsers",
    async () => {
        const response = await axios.get(URL_USER)
        return response.data
    }
);

export const addAsyncUser = createAsyncThunk(
    "usersList/addAsyncUser",
    async (data) => {
        const response = await axios.post(URL_USER, data)
        return response.data
    }
);

export const userSlice = createSlice({
    name: "usersList",
    initialState: {
        user: {},
    },
    reducers: {
        getUsers: (state) => {
            return state.user;
        },
        addUser: (state, { payload }) => {
            state.user = payload;
        }
    },
    extraReducers: {
        [fetchAsyncUsers.pending]: () => {
            console.log("Pending Users");
        },
        [fetchAsyncUsers.fulfilled]: (state, {payload}) => {
            console.log("Users Fetched Successfully");
            state.user = payload;
        },
        [fetchAsyncUsers.rejected]: () => {
            console.log("Users Rejected");
        },
        [addAsyncUser.fulfilled]: (state, {payload}) => {
            console.log("User Added Successfully");
        },

    }
});

export const { getUsers, addUser } = userSlice.actions;