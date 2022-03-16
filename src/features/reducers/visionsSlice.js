import axios from 'axios';
import { URL_VISIONS } from '../api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addAsyncService = createAsyncThunk(
    "visions/addAsyncUser",
    async (data) => {
        const response = await axios.post(URL_VISIONS, data)
        return response.data
    }
);

export const visionsSlice = createSlice({
    name: "visions",
    initialState: {
        provider: '',
        selfdescription: '',
        user: ''
    },
    reducers: {
    },
    extraReducers: {
        [addAsyncService.pending]: () => {
            console.log("Pending Visions");
        },
        [addAsyncService.fulfilled]: (state, {payload}) => {
            console.log("Visions Fetched Successfully");
            state.user = payload;
        },
        [addAsyncService.rejected]: () => {
            console.log("Visions Rejected");
        },

    }
});
