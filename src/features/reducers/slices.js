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

export const connectionSlice = createSlice({
    name: "connection",
    initialState: {
        connected: false,
        wallet: true,
        onboarded: true,
        did: '',
        account: {},
    },
    reducers: {
        connectReducer: (state, action) => {
            state.connected = action.payload;
            return state;
        },
        walletReducer: (state, action) => {
            state.wallet = action.payload;
            return state;
        },
        onboardedReducer: (state, action) => {
            state.onboarded = action.payload;
            return state;
        },
        didReducer: (state, action) => {
            state.did = action.payload;
            return state;
        },
        accountReducer: (state, action) => {
            state.account = action.payload;
            return state;
        },
    }
})

export const { connectReducer, walletReducer, onboardedReducer, accountReducer, didReducer } = connectionSlice.actions;

export const userSlice = createSlice({
    name: "usersList",
    initialState: {
        user: {},
    },
    reducers: {
        getUsers: (state, { payload }) => {
            state.user = payload;
        },
        addUser: (state, { payload }) => {
            state.user = payload;
        }
    },
    extraReducers: {
        [fetchAsyncUsers.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncUsers.fulfilled]: (state, {payload}) => {
            console.log("Fetched Successfully");
            state.user = payload;
        },
        [fetchAsyncUsers.rejected]: () => {
            console.log("Rejected");
        },
        [addAsyncUser.fulfilled]: (state, {payload}) => {
            console.log("Added Successfully");
        },

    }
});

export const { getUsers, addUser } = userSlice.actions;
