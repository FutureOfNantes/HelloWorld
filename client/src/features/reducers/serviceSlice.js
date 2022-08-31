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
        try{const response = await axios.post(URL_SD, data)
        return response.data}
        catch(err){console.log(err)}
    }
);

export const newServiceSlice = createSlice({
    name: "newService",
    initialState: {
        id: '',
        title: '',
        description: '',
        type:'',
        typeData: '',
        levelData: '',
        formatData: '',
        originalData: '',
        personalData: '',
        labelData: '',
        accessData: '',
        accessType: '',
        urlType: '',
        documentation: '',
        conditions: '',
        licence: '',
        entity: '',
        authorDid: ''
    },
    reducers: {
        addTitle: (state, { payload }) => {
            state.title = payload;
        },
        addDescription: (state, { payload }) => {
            state.description = payload;
        },
        addType: (state, { payload }) => {
            state.type = payload;
        },
        addTypeData: (state, { payload }) => {
            state.typeData = payload;
        },
        addLevelData: (state, { payload }) => {
            state.levelData = payload;
        },
        addFormatData: (state, { payload }) => {
            state.formatData = payload;
        },
        addOriginalData: (state, { payload }) => {
            state.originalData = payload;
        },
        addPersonalData: (state, { payload }) => {
            state.personalData = payload;
        },
        addLabel: (state, { payload }) => {
            state.labelData = payload;
        },
        addAccessData: (state, { payload }) => {
            state.accessData = payload;
        },
        addAccessType: (state, { payload }) => {
            state.accessType = payload;
        },
        addUrl: (state, { payload }) => {
            state.urlType = payload;
        },
        addDocumentation: (state, { payload }) => {
            state.documentation = payload;
        },
        addConditions: (state, { payload }) => {
            state.conditions = payload;
        },
        addLicence: (state, { payload }) => {
            state.licence = payload;
        },
        addInfo: (state, { payload }) => {
            state.entity = payload.entity;
            state.authorDid = payload.authorDid;
            state.id = payload.id;
        }
    }
})

export const serviceSlice = createSlice({
    name: "servicesList",
    initialState: {
        service: {},
    },
    reducers: {
        getServices: (state, { payload }) => {
            state = payload;
        },
        addService: (state, { payload }) => {
            state = payload;
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
        [addAsyncService.pending]: (state, {payload}) => {
            console.log("Pending Adding Service");
        },
        [addAsyncService.fulfilled]: (state, {payload}) => {
            console.log("Service Added Successfully");
        },
        [addAsyncService.rejected]: (state, {payload}) => {
            console.log("Adding Service Rejected");
        },

    }
});

export const { getServices, addService } = serviceSlice.actions;
export const { addTitle, addDescription, addType, addTypeData, addLevelData, 
    addFormatData, addOriginalData, addPersonalData, addLabel, addAccessData,
    addAccessType, addUrl, addDocumentation, addConditions, addLicence, addInfo } = newServiceSlice.actions;
