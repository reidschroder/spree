import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./types";
import { pReducer } from "../reducers/index";
import { persistStore } from "redux-persist";

const state: AppState = {
    customer: {
        customerId: 0, 
        customerUsername: "",
        customerFirstName: "",
        customerLastName: "",
        customerEmail: "",
        customerAddress: ""

    },
    darkMode: {
        darkmode: "dark"
    },
    productList: {
        products: []
    },
    cartList: {
        cart: []
    }
}

export const store = configureStore({
    reducer: pReducer
})

export const persistor = persistStore(store)