import { UPDATE_PRODUCTLIST } from "../actions/ActionTypes";
import { ProductList } from "../store/types";

let initialState: ProductList = {
    products: []
}

type Action = {
    type: string,
    payload: any
}

export const ProductListReducer = (state: ProductList = initialState, action: Action)=> {
    switch(action.type) {
        case UPDATE_PRODUCTLIST:
            initialState = action.payload
            return {
                ...initialState
            }
        default:
            return state
    }
}