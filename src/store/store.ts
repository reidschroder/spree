import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./types";
import { pReducer } from "../reducers/index";
import { persistStore } from "redux-persist";

const state: AppState = {
    customer: {
        customerId: 0, 
        customerUsername: ""
    },
    darkMode: {
        darkmode: "dark"
    },
    productList: {
        products: []
    }
}

export const store = configureStore({
    reducer: pReducer
})

export const persistor = persistStore(store)