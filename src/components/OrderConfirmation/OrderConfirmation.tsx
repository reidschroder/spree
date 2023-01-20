import React from "react";
import { useSelector } from "react-redux";
import "./OrderConfirmation.css";





const OrderConfirmation : React.FC<any> = (props: any) => {

    const appState = useSelector<any, any>((state) => state);
    
    const getItemNames = () => {

        let itemString:string = "";

        for(let i = 0; i < appState.cartList.cart.length -1; i++){
            itemString += appState.cartList.cart[i].productName + ", "
        }
        
        itemString += "and " + appState.cartList.cart[appState.cartList.cart.length - 1].productName

        return itemString;

    };





  return (
    <div className="container mt-4 mb-4">
      <div className="row d-flex cart-style align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="card rounded shadow-sm p-3">
            <div className="d-flex justify-content-center border-bottom">
              <div className="p-3">
                <div className="progresses">
                  <div className="steps">
                    {" "}
                    <span>
                      <i className=""></i>
                      <h3>You Did A Thing!</h3>
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
                    {" "}
                    <span className="check1">
                      <i className="fa fa-check"></i>
                    </span>{" "}
                    <span className="font-weight-bold">Order Confirmed</span>{" "}
                    <small className="mt-2">
                      Your purchase will ship to:
                    </small>
                    <small className="mt-2">
                      {appState.customer.customerAddress}
                    </small>{" "}
                  </div>{" "}
                  <button className="btn btn-primary btn-block order-button">
                    {" "}
                    <a href="/home"> Continue Shopping </a>
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

export default OrderConfirmation;

