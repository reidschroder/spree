import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./types";
import reducer from "../reducers/index";

const state: AppState = {
    customer: {
        customerId: 0, 
        customerUsername: ""
    }
}

export const store = configureStore({
    reducer
})