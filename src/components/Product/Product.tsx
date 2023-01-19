import React from "react";
import { useNavigate } from "react-router";
import "./Product.css"
const Product: React.FC<any> = (props: any) => {

  const navigate = useNavigate();

  const redirectProductPage = () => {
    navigate(`/product/${props.id}`)
  }

  return (
    <div className ="col-md-8 col-lg-6 col-xl-4 redirectP" role="button" onClick={redirectProductPage}>
      <div className ="card text-black">
        <i className ="fab fa-lg pt-3 pb-1 px-3"></i>
        <img src={props.url}
          className ="card-img-top" alt="Apple Computer" />
        <div className ="card-body">
          <div className ="text-center">
            <p className ="text-muted mb-4">{props.name}</p>
          </div>
          <div>
            <div className ="d-flex justify-content-between">
              <span>Type</span><span>{props.type}</span>
            </div>
            <div className ="d-flex justify-content-between">
              <span>Price</span><span>{props.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
