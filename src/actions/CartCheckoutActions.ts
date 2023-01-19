import axios from "axios";
import { CartList } from "../store/types";
import { ADD_PRODUCT, DEL_PRODUCT } from "./ActionTypes";

export const addProduct = (currentCart: Array<any>, productId: number) => async (dispatch: any) => {
    let newCart: CartList;
    try {
        const response = await axios.get(`http://localhost:5555/data/products/${productId}`);
        
        if (response.status === 200) {
            console.log(response);
            currentCart.push(response.data);
            newCart = {
                cart: currentCart
            }
            return dispatch({
                type: ADD_PRODUCT,
                payload: newCart
            })
        }
    }
    catch (e) {
        console.log("Couldn't get product FRONTEND");
    }
}

export const delProduct = (currentCart: Array<any>, productId: number) => {
    let newCart: CartList;
    let remove = 0;
    for (let i = 0; i < currentCart.length; i++) {
        if (currentCart[i].productId === productId) {
            remove = i;
            break;
        }
    }
    currentCart.splice(remove, 1);
    newCart = {
        cart: currentCart
    }

    return {
        type: DEL_PRODUCT,
        payload: newCart
    }
}
