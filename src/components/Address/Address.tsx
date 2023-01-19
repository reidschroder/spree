import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { addAddress } from "../../actions/AddressActions";
import "./Address.css";

const Address: React.FC<any> = () => {

  const appState = useSelector<any, any>((state: any) => state);
  const dispatch = useDispatch();

  // use =State hooks to declare some state that will hold user information
  const [streetName, setStreetName] = useState("");
  const [apartmentUnit, setApartmentUnit] = useState("");
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [zipCode, setZipCode] = useState("");

  const gatherInput = (input: any) => {
    if (input.target.name === "streetName") {
      setStreetName(input.target.value);
    } 
    else if (input.target.name === "apartmentUnit") {
      setApartmentUnit(input.target.value);
    } 
    else if (input.target.name === "cityName") {
      setCityName(input.target.value);
    } 
    else if (input.target.name === "stateName") {
      setStateName(input.target.value);
    } 
    else if (input.target.name === "zipCode") {
      setZipCode(input.target.value);
    }
  };

  const navigate = useNavigate();
  const address = async () => {

  
    await  addAddress({
        streetName,
        apartmentUnit,
        cityName,
        stateName,
        zipCode
      }, navigate, appState.customer.customerId ) 
  };

  return (
    <div className="Address">
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "2rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-1 mt-md-1 pb-2">
                    <h2 className="fw-bold mb-2 text-uppercase">Address</h2>
                    <p className="text-white-50 mb-3">Create an account</p>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typeStreetNameX">
                        Street Name
                      </label>
                      <input
                        name="streetName"
                        type="text"
                        id="typeStreetNameX"
                        className="form-control form-control-lg"
                        onChange={gatherInput}
                      />
                    </div>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typeApartmentUnitX">
                        Apartment Unit
                      </label>
                      <input
                        name="ApartentUnit"
                        type="text"
                        id="typeApartmentUnitX"
                        className="form-control form-control-lg"
                        onChange={gatherInput}
                      />
                    </div>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typeCityNameX">
                        City 
                      </label>
                      <input
                        name="cityName"
                        type="email"
                        id="typeCityNameX"
                        className="form-control form-control-lg"
                        onChange={gatherInput}
                      />
                    </div>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typeStateNameX">
                        State
                      </label>
                      <input
                        name="stateName"
                        type="text"
                        id="typeStateNameX"
                        className="form-control form-control-lg"
                        onChange={gatherInput}
                      />
                    </div>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typeZipCodeX">
                        Zipcode 
                      </label>
                      <input
                        name="zipCode"
                        type=""
                        id="typeZipCodeX"
                        className="form-control form-control-lg"
                        onChange={gatherInput}
                      />
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={address}
                    >
                      Add Address
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Address;



