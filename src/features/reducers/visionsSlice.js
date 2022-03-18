import axios from 'axios';
import { URL_VISIONS } from '../api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addAsyncVisions = createAsyncThunk(
    "visions/addAsyncVisions",
    async (data) => {
        try {const response = await axios.post(URL_VISIONS, data, { headers: {'Content-Type': 'application/json'}})
        return response.data}
        catch(err){console.log(err)}

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
            state.redirectUrl = payload.redirectUrl;
            window.location.href = state.redirectUrl},
        [addAsyncVisions.rejected]: () => {
            console.log("Visions Rejected");
        },

    }
});
