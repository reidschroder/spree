import React from "react";
import { useNavigate } from "react-router";
import "./Product.css"
const Product: React.FC<any> = (props: any) => {

  const navigate = useNavigate();

  const redirectProductPage = () => {
    navigate(`/product/${props.id}`)
  }

  return (
    <div className ="col-md-8 col-lg-6 col-xl-4 mb-4 redirectP" role="button" onClick={redirectProductPage}>
      <div className ="card">
        <i className ="fab fa-lg pt-3 pb-1 px-3"></i>
        <img src={props.url}
          className ="card-img-top" alt="Apple Computer" style={{ width: '400px', height: '500px', objectFit: 'contain', position: 'relative'}}/>
        <div className ="card-body">
          <div className ="text-center">
          {/* text-muted mb-4 */}
            <p className ="card-title">{props.name}</p>
          </div>
          <div>
            {/* className ="d-flex justify-content-between" used to but uncentered so nope*/}
            <div>
              <span>Type: </span>
              <span>{props.type}</span>
            </div>
            {/* className ="d-flex justify-content-between" see above*/}
            <div >
              <span>Price:  $</span><span>{props.price}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
