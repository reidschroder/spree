import axios from "axios";
import { useNavigate } from "react-router-dom";

interface CustomerAddress
{
    streetName: string,
        apartmentUnit: string,
        cityName: string,
        stateName: string,
        zipCode: string
}

export const addAddress = (addressinfo: CustomerAddress, navigate:Function) => async (dispatch: any) =>
{
    try {
        // send my HTTP request with axios, and put it into a variable we can use
        const response = await axios.post("http://localhost:5555/data/address", addressinfo);

        if (response.status === 202)
        {
            
            console.log(response) // to see the data coming back
            navigate("/profile");
        }
    } catch(e)
    {
        console.log("Could not add ADDRESS")
    }
}