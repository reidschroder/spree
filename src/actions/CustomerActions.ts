import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Customer, DarkModeState } from "../store/types"
import { LOGIN_USER, LOGOUT_USER, SET_DARKMODE } from "./ActionTypes";


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
    let loggedInCustomer: Customer; // var to store data from 
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
                customerUsername: response.data.customerUsername,
                customerFirstName: "",
                customerLastName: "",
                customerEmail: "",
                customerAddress: ""
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

export const registerCustomer = (registerInfo: CustomerRegister, navigate: Function) => async (dispatch: any) => {

    try {
        const response = await axios.post("http://localhost:5555/data/register", registerInfo);

        if (response.status === 202) {
            console.log(response);
            navigate("/login");
        }
    }
    catch (e) {
        console.log("Registration Failed");
    }
}

export const logoutCustomer = () => {
    let loggedOutCustomer: Customer;
   
    loggedOutCustomer = {
        customerId: 0,
        customerUsername: '',
        customerFirstName: '',
        customerLastName: '',
        customerEmail: '',
        customerAddress: ''
    }

    return {
        type: LOGOUT_USER,
        payload: loggedOutCustomer
    }
    
}

export const setDarkMode = (darkMode: string) => {
    let setMode: DarkModeState;

    setMode = {
        darkmode: darkMode
    }

    return {
        type: SET_DARKMODE,
        payload: setMode
    }
}