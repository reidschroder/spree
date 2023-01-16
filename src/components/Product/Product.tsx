import React, { useState } from "react";

const Product: React.FC<any> = (props: any) => {

  // const [productId, setProductId] = useState(0);
  // const [productName, setProductName] = useState("");
  // const [productPrice, setProductPrice] = useState(0);
  // const [productDescription, setProductDescription] = useState("");
  // const [productType, setProductType] = useState("");
  // const [productSize, setProductSize] = useState("");

  return (
  <section style={{backgroundColor: 'white'}}>
    <div className ="container py-5">
      <div className ="row justify-content-center">
        <div className ="col-md-8 col-lg-6 col-xl-4">
          <div className ="card text-black">
            <i className ="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
            <img src={props.url}
              className ="card-img-top" alt="Apple Computer" />
            <div className ="card-body">
              <div className ="text-center">
                <h5 className ="card-title">Believing is seeing</h5>
                <p className ="text-muted mb-4">{props.name}</p>
                {/* <p className ="text-muted mb-4">Apple pro display XDR</p> */}
              </div>
              <div>
                <div className ="d-flex justify-content-between">
                  <span>Type</span><span>{props.type}</span>
                </div>
                <div className ="d-flex justify-content-between">
                  <span>Price</span><span>{props.price}</span>
                </div>
                <div className ="d-flex justify-content-between">
                  <span>Pro Display XDR</span><span>$5,999</span>
                </div>
                <div className ="d-flex justify-content-between">
                  <span>Pro stand</span><span>$999</span>
                </div>
                <div className ="d-flex justify-content-between">
                  <span>Vesa Mount Adapter</span><span>$199</span>
                </div>
              </div>
              <div className ="d-flex justify-content-between total font-weight-bold mt-4">
                <span>Total</span><span>$7,197.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Product;
