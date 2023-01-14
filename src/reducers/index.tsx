import { combineReducers } from "redux";
import { CustomerReducer } from "./CustomerReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({
    customer: CustomerReducer
})

const persistConfig = {
    key: 'root',
    storage
}

export const pReducer = persistReducer(persistConfig, rootReducer);