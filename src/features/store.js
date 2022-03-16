import { configureStore } from "@reduxjs/toolkit"
import { connectionSlice } from "./reducers/connectionSlice"
import { userSlice } from "./reducers/userSlice"
import { serviceSlice } from "./reducers/serviceSlice"
import { visionsSlice } from "./reducers/visionsSlice"

export const store = configureStore({
    reducer: {
        connection: connectionSlice.reducer,
        usersList: userSlice.reducer,
        servicesList:  serviceSlice.reducer,
        visions: visionsSlice.reducer
    }
})