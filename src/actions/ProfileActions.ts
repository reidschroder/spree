import axios from "axios";
import { info } from "console";
import { Customer } from "../store/types"
import { GET_PROFILE } from "./ActionTypes";

export const retrieveProfile = (customerId: number) => async (dispatch:any) => 
{
    let loggedInProfile: Customer;
    try{
        const response = await axios.get(`http://localhost:5555/data/${customerId}`)//.then((info) => console.log(info)).catch((error) => console.log(error));
        if(response.status === 200)
        {   
            console.log(response);
            if (response.data.address !== null) {
                let address = `${response.data.address.streetName} ${response.data.address.apartmentUnit} ${response.data.address.cityName} ${response.data.address.stateName} ${response.data.address.zipCode}`;

                console.log(address);

                loggedInProfile = {
                    customerId: response.data.customerId,
                    customerUsername: response.data.customerUsername,
                    customerFirstName: response.data.customerFirstName,
                    customerLastName: response.data.customerLastName,
                    customerEmail: response.data.customerEmail,
                    customerAddress: address
                }
            }
            else {
                loggedInProfile = {
                    customerId: response.data.customerId,
                    customerUsername: response.data.customerUsername,
                    customerFirstName: response.data.customerFirstName,
                    customerLastName: response.data.customerLastName,
                    customerEmail: response.data.customerEmail,
                    customerAddress: ""
                }
            }
            
            



          

            console.log("In actions Profile")
            return dispatch({
                type: GET_PROFILE,
                payload: loggedInProfile
            })
        }
    }
    catch(e)
    {
        console.log("Get profile data failed !");
    }
}