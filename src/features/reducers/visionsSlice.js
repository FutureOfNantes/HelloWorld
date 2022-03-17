import axios from 'axios';
import { URL_VISIONS } from '../api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addAsyncVisions = createAsyncThunk(
    "visions/addAsyncVisions",
    async (data) => {
        const response = await axios.post(URL_VISIONS, data, { headers: {'Content-Type': 'application/json'}})
        console.log(response.data)
        return response.data

    }
);

export const visionsSlice = createSlice({
    name: "visions",
    initialState: {
        providerJwt: '',
        sdJwt: '',
        userJwt: '',
        redirectUrl: ''
    },
    reducers: {
    },
    extraReducers: {
        [addAsyncVisions.pending]: () => {
            console.log("Pending Visions");
        },
        [addAsyncVisions.fulfilled]: (state, {payload}) => {
            console.log("Visions Fetched Successfully");
            state.redirectUrl = payload;
        },
        [addAsyncVisions.rejected]: () => {
            console.log("Visions Rejected");
        },

    }
});
