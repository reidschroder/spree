import axios from "axios";
import { async } from "q";
import { CartList } from "../store/types";
import { ADD_PRODUCT, CLEAR_ALL_PRODUCTS, DEL_PRODUCT } from "./ActionTypes";


export const addProduct = (currentCart: Array<any>, productId: number, productSize: string = "S", productQuantity: number) => async (dispatch: any) => {
    let newCart: CartList;
    try {
        let response = await axios.get(`http://localhost:5555/data/products/${productId}`);
        
        if (response.status === 200) {
            console.log(response);
            response.data.size = productSize;
            console.log(response);
            for (let i = 0; i < productQuantity; i++){
                currentCart = currentCart.concat(response.data);
            }
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
        console.log("Couldn't get product FRONTEND" + e);
    }
}

export const delProduct = (currentCart: Array<any>, productId: number, productSize: string) => async (dispatch: any) => {
    let newCart: CartList;
    let removeArr: number[] = [];

    for (let i = 0; i < currentCart.length; i++) {
        if (currentCart[i].productId === productId && currentCart[i].size === productSize) {
            removeArr = removeArr.concat(i);
        }
    }

    let nCart: any[] = [];
    for (let x = 0; x < currentCart.length; x++) {
        if (!removeArr.includes(x)) {
            nCart = nCart.concat(currentCart[x]);
        }
    }
    newCart = {
        cart: nCart
    }

    try {
        return dispatch ({
            type: DEL_PRODUCT,
            payload: newCart
        })
    }
    catch (e) {
        console.log(e);
    }
}

export const clearCart = () => async (dispatch: any) => {
    let emptyCart: CartList = {
        cart: []
    };

    return dispatch({
        type: CLEAR_ALL_PRODUCTS,
        payload: emptyCart
    })
}
