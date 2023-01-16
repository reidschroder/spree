import axios from "axios"
import { ProductList } from "../store/types";
import { UPDATE_PRODUCTLIST } from "./ActionTypes";


export const getProductList = () => async (dispatch: any) => {
    let updatedList: ProductList;
    try {

        const response = await axios.get("http://localhost:5555/data/products");

        if (response.status === 200) {
            
            console.log(response);

            updatedList = {
                products: response.data
            }
            
            return dispatch({
                type: UPDATE_PRODUCTLIST,
                payload: updatedList
            })

        }
    }
    catch (e) {
        console.log(e);
    }
    
}