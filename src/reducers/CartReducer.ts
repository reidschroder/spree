import { ADD_PRODUCT, CLEAR_ALL_PRODUCTS, DEL_PRODUCT } from "../actions/ActionTypes";
import { CartList } from "../store/types";

let initialState: CartList = {
    cart: []
}

type Action = {
    type: string,
    payload: any
}

export const CartReducer = (state: CartList = initialState, action: Action)=> {
    switch(action.type) {
        case ADD_PRODUCT:
            initialState = action.payload
            return {
                ...initialState
            }
        case DEL_PRODUCT:
            initialState = action.payload
            return {
                ...initialState
            }
        case CLEAR_ALL_PRODUCTS:
            initialState = action.payload
            return {
                ...initialState
            }
        default:
            return state
    }
}