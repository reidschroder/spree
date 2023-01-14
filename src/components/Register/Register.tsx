import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerCustomer } from "../../actions/CustomerActions";
import "./Register.css";

const Register: React.FC<any> = () => {
  const dispatch = useDispatch();

  // use =State hooks to declare some state that will hold user information
  const [customerFirstName, setCustomerFirstName] = useState("");
  const [customerLastName, setCustomerLastName] = useState("");
  const [customerUsername, setCustomerUsername] = useState("");
  const [customerPassword, setCustomerPassword] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const gatherInput = (input: any) => {
    if (input.target.name === "customerFirstName") {
      setCustomerFirstName(input.target.value);
    } 
    else if (input.target.name === "customerLastName") {
      setCustomerLastName(input.target.value);
    } 
    else if (input.target.name === "customerUsername") {
      setCustomerUsername(input.target.value);
    } 
    else if (input.target.name === "customerPassword") {
      setCustomerPassword(input.target.value);
    } 
    else if (input.target.name === "customerEmail") {
      setCustomerEmail(input.target.value);
    }
  };

  const register = async () => {

    await dispatch(
      registerCustomer({
        customerFirstName,
        customerLastName,
        customerUsername,
        customerPassword,
        customerEmail
      }) as any
    );
  };

  return (
    <div className="Register">
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "2rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-4 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                    <p className="text-white-50 mb-3">Create an account</p>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typeFirstNameX">
                        First Name
                      </label>
                      <input
                        name="customerFirstName"
                        type="text"
                        id="typeFirstNameX"
                        className="form-control form-control-lg"
                        onChange={gatherInput}
                      />
                    </div>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typeLastNameX">
                        Last Name
                      </label>
                      <input
                        name="customerLastName"
                        type="text"
                        id="typeLastNameX"
                        className="form-control form-control-lg"
                        onChange={gatherInput}
                      />
                    </div>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                      <input
                        name="customerEmail"
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        onChange={gatherInput}
                      />
                    </div>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typeUserNameX">
                        Username
                      </label>
                      <input
                        name="customerUsername"
                        type="text"
                        id="typeUserNameX"
                        className="form-control form-control-lg"
                        onChange={gatherInput}
                      />
                    </div>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                      <input
                        name="customerPassword"
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        onChange={gatherInput}
                      />
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={register}
                    >
                      Register
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      Have an account?{" "}
                      <a href="/data/login" className="text-white-50 fw-bold">
                        Login
                      </a>
                    </p>
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
export default Register;
