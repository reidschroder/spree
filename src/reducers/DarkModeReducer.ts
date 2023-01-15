import { SET_DARKMODE } from "../actions/ActionTypes";
import { DarkModeState } from "../store/types";

let initialState: DarkModeState = {
    darkmode: "light"
}

type Action = {
    type: string,
    payload: any
}

export const DarkModeReducer = (state: DarkModeState = initialState, action: Action) => {
    switch(action.type){
        case SET_DARKMODE:
            initialState = action.payload
            return{
                ...initialState
            }
        default:
            return state
    }
}
