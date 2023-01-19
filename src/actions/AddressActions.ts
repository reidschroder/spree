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

export const addAddress = async (addressinfo: CustomerAddress, navigate:Function, customerId: number) =>
{
    try {
        // send my HTTP request with axios, and put it into a variable we can use
        const response = await axios.post("http://localhost:5555/data/address", addressinfo);

        if (response.status === 202)
        {
            console.log(response);
            console.log(response.data.addressId);
            console.log(customerId);
            
            const response2 = await axios.put(`http://localhost:5555/data/customer/${customerId}/address`, response.data.addressId, {
                headers: { "Content-type": "application/json" }
              }).then((info: any) => console.log(info)).catch((error: any) => console.log(error));
            
            console.log(response2);
            navigate("/profile");
        }
    } 
    catch(e)
    {
        console.log("Could not add ADDRESS" + e)
    }
}