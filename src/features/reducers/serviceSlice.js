import axios from 'axios';
import { URL_SD } from '../api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAsyncServices = createAsyncThunk(
    "servicesList/fetchAsyncServices",
    async () => {
        const response = await axios.get(URL_SD)
        return response.data
    }
);

export const addAsyncService = createAsyncThunk(
    "servicesList/addAsyncService",
    async (data) => {
        const response = await axios.post(URL_SD, data)
        return response.data
    }
);

export const serviceSlice = createSlice({
    name: "servicesList",
    initialState: {
        service: {},
    },
    reducers: {
        getServices: (state, { payload }) => {
            state.user = payload;
        },
        addService: (state, { payload }) => {
            state.user = payload;
        }
    },
    extraReducers: {
        [fetchAsyncServices.pending]: () => {
            console.log("Pending Services");
        },
        [fetchAsyncServices.fulfilled]: (state, {payload}) => {
            console.log("Services Fetched Successfully");
            state.service = payload;
        },
        [fetchAsyncServices.rejected]: () => {
            console.log("Services Rejected");
        },
        [addAsyncService.fulfilled]: (state, {payload}) => {
            console.log("Service Added Successfully");
        },

    }
});

export const { getServices, addService } = serviceSlice.actions;