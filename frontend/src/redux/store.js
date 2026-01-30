import {configureStore} from "@reduxjs/toolkit"
import  AutheSliceReducer  from "./slices/AuthSlice"


export const store = configureStore({
    reducer:{
        auth:AutheSliceReducer
    },
})