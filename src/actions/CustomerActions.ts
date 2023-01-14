import axios from "axios";
import { Customer } from "../store/types"
import { LOGIN_USER } from "./ActionTypes";


interface CustomerLogin {
    username: string,
    password: string
}

interface CustomerRegister {
    customerFirstName: string,
    customerLastName: string,
    customerUsername: string,
    customerPassword: string,
    customerEmail: string
}

export const loginCustomer = (creds: CustomerLogin) => async (dispatch: any) => {
    let loggedInCustomer: Customer;
    console.log();
    try {

        //send my HTTP request with axios, and put it into a variable we can use
        const response = await axios.post("http://localhost:5555/data/login", creds);

        if (response.status === 202) { //if the login was successful...
            
            console.log(response) //to see the data coming back

            //populate our loggedInUser variable based on the data sent back from the server
            //this is the payload of new data we're going to dispatch to the store
            loggedInCustomer = {
                customerId: response.data.customerId,
                customerUsername: response.data.customerUsername
            }

            //now we actually DISPATCH (send) this data to the store and reducers 
            //see UserReducer, see store.ts
            //notice in the reducers, this is the type of data we need for the Action object
            return dispatch({
                type: LOGIN_USER,
                payload: loggedInCustomer
            })

        }

    } catch (e) {
        console.log("LOGIN FAILED!")
    }
}

export const registerCustomer = (registerInfo: CustomerRegister) => async (dispatch: any) => {

    try {
        const response = await axios.post("http://localhost:5555/data/register", registerInfo);

        if (response.status === 202) {
            console.log(response);
        }
    }
    catch (e) {
        console.log("Registered Failed");
    }
}