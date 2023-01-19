import { combineReducers } from "redux";
import { CustomerReducer } from "./CustomerReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { DarkModeReducer } from "./DarkModeReducer";
import { ProductListReducer } from "./ProductListReducer";
import { CartReducer } from "./CartReducer";

export const rootReducer = combineReducers({
    customer: CustomerReducer,
    darkMode: DarkModeReducer,
    productList: ProductListReducer,
    cartList: CartReducer
})

const persistConfig = {
    key: 'root',
    storage
}

export const pReducer = persistReducer(persistConfig, rootReducer);