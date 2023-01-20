import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutCustomer } from "../../actions/CustomerActions";
import DarkMode from "../DarkMode/DarkMode";

//Created inital Nav bar. Needs ternary in nav bar to return profile and logout if user is logged in or not

const Nav: React.FC<any> = () => {
  const appState = useSelector<any, any>((state) => state);
  const dispatch = useDispatch();

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">
          Spoint
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
                  <DarkMode />
            </li>
            <li className="nav-item">
                  <a className="nav-link" href="/cart">
                    Cart
                  </a>
            </li>      
            {" "}
             {appState.customer.customerId > 0 ? ( 
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/profile">
                    View Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login" 
                  onClick={() => dispatch(logoutCustomer())}>
                    Logout
                  </a>
                </li>
              </>
             ) : ( 
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  login
                </a>
              </li>
             )}
            <li>{appState.customer.customerId}</li>
          </ul>
        </div>
      </nav>
    );
  };
export default Nav;
