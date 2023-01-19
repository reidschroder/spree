import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './CartCheckout.css'

const CartCheckout: React.FC<any> = () => {

  const appState = useSelector<any, any>((state) => state);
  const dispatch = useDispatch();
  const [delItem, setDelItem] = useState();

  const increment = (input: any) => {
    if (input.target.className === "plus") {
      return input.target.parentNode.querySelector('input[type=number]').stepUp()
    }
    else {
        return input.target.parentNode.querySelector('input[type=number]').stepDown()
    }
  }



const removeFromCart = (delItem: any) => {
  // delItem is the event item
  // we want to see/check what attribute is the id of the product
  // then do dispatch 
  // if (delItem.target.productId ===)
}

  return (
  <section className="h-100 h-custom" style={{backgroundColor: 'white'}}>
    <div className="container h-100 py-5">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col">
          <div className="card shopping-cart" style={{borderRadius: '15px'}}>
            <div className="card-body text-black">

              <div className="row">
                <div className="col-lg-6 px-5 py-4">

                  <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Shopping Cart</h3>

                  <div className="d-flex align-items-center mb-5">
                    <div className="flex-shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
                        className="img-fluid" style={{width: '150px'}} alt="Generic placeholder"/>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <a href="#!" className="float-end text-black"><i className= "fas fa-times"></i></a>
                      {/* requires a template literal */}
                      <h5 className="text-primary">blue clothing 1</h5>
                      <h6 style={{color: 'lightgray'}}>Size: </h6>
                      <div className="d-flex align-items-center">
                        <p className="fw-bold mb-0 me-5 pe-3">Price:</p>
                        <div className="def-number-input number-input safari_only">
                          <button onClick={increment}
                           className="minus"></button>
                          <input className="quantity fw-bold text-black" min="0" name="quantity"
                            type="number"/>
                          <button onClick={increment}
                            className="plus"></button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-5">
                    <div className="flex-shrink-0">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/6.webp"
                        className="img-fluid" style={{width: '150px'}} alt="Generic placeholder"/>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <a href="#!" className="float-end text-black"><i className="fas fa-times"></i></a>
                      <h5 className="text-primary">blue clothing 2</h5>
                      <h6 style={{color: 'lightgray'}}>Size : </h6>
                      <div className="d-flex align-items-center">
                        <p className="fw-bold mb-0 me-5 pe-3">Price</p>
                        <div className="def-number-input number-input safari_only">
                          <button onClick={increment}
                            className="minus"></button>
                          <input className="quantity fw-bold text-black" min="0" name="quantity" type="number"/>
                          <button onClick={increment}
                            className="plus"></button>
                        </div>
                      </div>
                    </div>
                  </div>

                  

                  <hr className="mb-4" style={{height: '2px', backgroundColor: 'lightblue', opacity: 1}}/>

                  {/* <div className="d-flex justify-content-between px-x">
                    <p className="fw-bold">Discount:</p>
                    <p className="fw-bold">95$</p>
                  </div> */}
                  <div className="d-flex justify-content-between p-2 mb-2" style={{backgroundColor: 'lightskyblue' }}>
                    <h5 className="fw-bold mb-0">Total:</h5>
                    <h5 className="fw-bold mb-0">2261$</h5>
                  </div>

                </div>
                <div className="col-lg-6 px-5 py-4">

                  <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>

                  <form className="mb-5">

                    <div className="form-outline mb-5">
                      Card Number
                      <input type="number" id="typeText" className="form-control form-control-lg" size={17} minLength={13} maxLength={19} placeholder="1234 5678 1234 5678" />
                      <label className="form-label" htmlFor="typeText"></label>
                    </div>

                    <div className="form-outline mb-5">
                      Name on Card
                      <input type="text" id="typeName" className="form-control form-control-lg" size={17} placeholder="Jenny James" />
                      <label className="form-label" htmlFor="typeName"></label>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-5">
                        <div className="form-outline">
                          Expiration
                          <input type="text" id="typeExp exp" className="form-control form-control-lg" 
                            size={7}  minLength={5} maxLength={5} placeholder="MM/YY" />
                          <label className="form-label" htmlFor="typeExp"></label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-5">
                        <div className="form-outline">
                          CVV
                          <input type="password" id="typeText1" className="form-control form-control-lg" size={1} minLength={3} maxLength={4} placeholder="1234" />
                          {/* originally typeText, not typeText1 because Chrome was fussing at me about it not being unique */}
                          <label className="form-label" htmlFor="typeText"></label>
                        </div>
                      </div>
                    </div>

                    <p className="mb-5">Complete your order below and thank you for shopping at Spoint, where blue is beautiful.</p>

                    <button type="button" className="btn btn-primary btn-block btn-lg">Place Your Order</button>

                    <h5 className="fw-bold mb-5 pt-5"  >
                      <a href="#!"><i 
                      className="fas fa-angle-left me-2"></i>Continue Shopping</a>
                    </h5>
                  </form>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CartCheckout