import { GET_PROFILE, LOGIN_USER, LOGOUT_USER } from "../actions/ActionTypes";
import { Customer } from "../store/types";

let initialState: Customer = {
    customerId: 0,
    customerUsername:"",
    customerFirstName:"",
    customerLastName:"",
    customerEmail:"",
    customerAddress:""
}

type Action = {
    type: string,
    payload: any
}

export const CustomerReducer = (state: Customer = initialState, action: Action) => {

    switch(action.type) {
        case LOGIN_USER:
            initialState = action.payload
            return {
                ...initialState
            }
        case LOGOUT_USER:
            initialState = action.payload
            return {
                ...initialState
            }
        case GET_PROFILE:
            initialState = action.payload
            return{
                ...initialState
            }
        default:
            return state
    }
}