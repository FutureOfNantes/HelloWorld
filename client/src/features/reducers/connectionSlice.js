import { createSlice } from '@reduxjs/toolkit';

export const connectionSlice = createSlice({
    name: "connection",
    initialState: {
        modal: '',
        source: '',
        connected: false,
        wallet: true,
        onboarded: true,
        did: '',
        account: {},
    },
    reducers: {
        modalReducer: (state, action) => {
            state.modal = action.payload.modal;
            state.source = action.payload.source;
            return state;
        },
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

export const { 
    modalReducer,
    connectReducer, 
    walletReducer, 
    onboardedReducer, 
    accountReducer, 
    didReducer
 } = connectionSlice.actions;


