import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginCustomer } from "../../actions/CustomerActions";

const Login: React.FC<any> = () => {
  const appState = useSelector<any, any>((state) => state);

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // we will use this to switch components - this is what lets us navigate to different
  //components through events -no more manual URL changes
  const navigate = useNavigate();

  useEffect(() => {
    if (appState.customer.customerId > 0) {
      navigate("/profile");
    }
  }, [appState.customer.customerId]);
  //when the user updates the username or password this will be called
  //the user/password state will get updated based on the name of the input thats changing
  const gatherInput = (input: any) => {
    if (input.target.name === "username") {
      setUsername(input.target.value);
    } else {
      setPassword(input.target.value);
    }
  };

  const login = async () => {
    await dispatch(loginCustomer({ username, password }) as any);
  };

  return (
    <div className="Login">
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
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-3">Login to your account</p>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typeUserNameX">
                        Username
                      </label>
                      <input
                        name="username"
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
                        name="password"
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        onChange={gatherInput}
                      />
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={login}
                    >
                      Login
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a href="/register" className="text-white-50 fw-bold">
                        Register
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

export default Login;
