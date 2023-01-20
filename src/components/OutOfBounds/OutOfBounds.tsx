import React from "react";
import { useSelector } from "react-redux";
import "./OutOfBounds.css";





const OutOfBounds : React.FC<any> = (props: any) => {



  return (
    <div className="container mt-4 mb-4">
      <div className="row d-flex cart align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card rounded shadow-sm p-3">
            <div className="d-flex justify-content-center border-bottom">
              <div className="p-3">
                <div className="progresses">
                  <div className="steps">
                    {" "}
                    <span>
                      <i className=""></i>
                      <h3>Hey, You can't be in here!!</h3>
                    </span>{" "}
                  </div>{" "}
                  <span className="line"></span>
                  <div className="steps">
                    {" "}
                    {" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-0">
              <div className="col-md-12 border-right p-5 align-self-center">
                <div className="text-center order-details">
                  <div className="d-flex justify-content-center mb-5 flex-column align-items-center">
                  
                    <span className="font-weight-bold">Let's take you somewhere safe</span>{" "}
                  </div>{" "}
                  <button className="btn btn-danger btn-block home-button">
                    {" "}
                    <a href="/home"> Home </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutOfBounds;