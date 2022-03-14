import { configureStore } from "@reduxjs/toolkit"
import { connectionSlice, userSlice } from "./reducers/slices"

export const store = configureStore({
    reducer: {
        connection: connectionSlice.reducer,
        usersList: userSlice.reducer
    }
})