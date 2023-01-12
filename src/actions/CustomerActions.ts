import { Customer } from "../store/types"


interface CustomerLogin {
    customerUsername: string,
    customerPassword: string
}

export const loginCustomer = (creds: CustomerLogin) => async (dispatch: any) => {
    let loggedInCustomer: Customer;

    
}