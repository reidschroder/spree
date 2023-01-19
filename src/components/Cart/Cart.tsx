import React from 'react';
import emailjs from '@emailjs/browser'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Cart : React.FC<any> = (props:any) => {
  const appState = useSelector<any, any>((state) => state);
  let navigate = useNavigate();

  const sendEmail = (e:any) => 
    {
        e.preventDefault();

        emailjs.send("service_iugqxzp","template_r361rbg",{
          customerUsername: `${appState.customer.customerUsername}`,
          subject: "Spoint Attire",
          customerEmail: `${appState.customer.customerEmail}`,
          },"dc-GXX1QtsLE6Mg9w")
        
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     // e.target.reset()
      navigate("/profile");
  }



  return (
  <section className="vh-100" style={{backgroundColor: 'mistyrose'}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        {/* update with template literal value for the count of items */}
        <p><span className="h2">Shopping Cart </span><span className="h4">(1 item in your cart)</span></p>
        {/* template literal for the image too */}
        <div className="card mb-4">
          <div className="card-body p-4">
            <div className="row align-items-center">
              <div className="col-md-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                  className="img-fluid" alt="Generic placeholder image"/>
              </div>
              {/* template literal for product name*/}
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Product</p>
                  <p className="lead fw-normal mb-0">iPad Air</p>
                </div>
              </div>
              {/*template literal for color*/}
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Color</p>
                  <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2" style={{color: 'thistle'}}/>
                    pink rose</p>
                </div>
              </div>
              {/* template literal for size*/}
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Size</p>
                  <p className="lead fw-normal mb-0"><i className="fas fa-circle me-2" style={{color: 'thistle'}}/>
                    md</p>
                </div>
              </div>
              {/* template literal for quantity
                thought: +/- quantity in/de -creases but creates more buttons and I think more things to keep track of so maybe no lol*/}
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Quantity</p>
                  <p className="lead fw-normal mb-0">1</p>
                </div>
              </div>
              {/* template literal for price */}
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Price</p>
                  <p className="lead fw-normal mb-0">$799</p>
                </div>
              </div>
              {/* template literal for total but only matters if we set up a think for tax, which I dont think we're doing but could be a nice touch; issue, divs are made up of 12 columns (see number in col-md-X) and we're trying to put 7 columns in equally and that's not going to work. Trying to make them all the same size will exceed 12, so it spills into the next row 
              Formatting thoughts: just don't do that part :)
              Second Formatting thoughts: sm/md are related to device size, not the column size (again, dictated by the numbers) so maybe change padding somehow? could also keep image/productName/color = 2 and the size/quanity/price/total = 1 (still only 10 accounted for)
              would make image 3 but I find that aggressively large so no thank you
              */}
              <div className="col-md-1 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Total</p>
                  <p className="lead fw-normal mb-0">$799</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-5">
          <div className="card-body p-4">
            {/* template literal for cart total*/}
            <div className="float-end">
              <p className="mb-0 me-5 d-flex align-items-center">
                <span className="small text-muted me-2">Cart Total:</span> <span
                  className="lead fw-normal">$799</span>
              </p>
            </div>

          </div>
        </div>
        {/* needs an onClick added for both buttons;
        Continue Shopping needs to link to home
        Checkout needs to link to checkout page*/}
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-light btn-lg me-2">Continue shopping</button>
          <button type="button" onClick={sendEmail} className="btn btn-primary btn-lg">Checkout</button>
        </div>

      </div>
    </div>
  </div>
</section>
  );
};

export default Cart