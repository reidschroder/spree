import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../CartProduct/CartProduct';
import './CartCheckout.css'
import { useNavigate } from 'react-router'
import emailjs from '@emailjs/browser'

const CartCheckout: React.FC<any> = () => {

  const appState = useSelector<any, any>((state) => state);
  const dispatch = useDispatch();
  let [cart, setCart] = useState([]);
  const [delItem, setDelItem] = useState();

  const increment = (input: any) => {
    if (input.target.className === "plus") {
      return input.target.parentNode.querySelector('input[type=number]').stepUp()
    }
    else {
        return input.target.parentNode.querySelector('input[type=number]').stepDown()
    }
  }

  const isProductSame = (p1: any, p2: any) => {
      if (p1.productId !== p2.productId) {
        return false;
      }
      if (p1.size !== p2.size) {
        return false;
      }
      return true;
  }

  const containsProduct = (product: any, arr: Array<any>) => {
    for (const p of arr) {
      if (isProductSame(p, product)) {
        return true;
      }
    }
    return false;
  }

  const isProductKeySame = (p1: any, p2: any) => {
    if (p1.id !== p2.id) {
      return false;
    }
    if (p1.size !== p2.size) {
      return false;
    }
    return true;
  }

  const containsProductKey = (product: any, arr: Array<any>) => {
    for (let i = 0; i < arr.length; i++) {
      if (isProductKeySame(arr[i], product)) {
        return {
          same: true,
          idx: i
        };
      }
    }
    return {
      same: false,
      idx: -1
    }
  }

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
      navigate("/orderconfirmation");
  }



  const loadCart = () => {
    // make Map 

    let arrKeys: any[] = [];
    let arrVals: any[] = [];

    for (const product of appState.cartList.cart) {
      let newKey = {
        id: product.productId,
        size: product.size
      }
      const {same, idx} = containsProductKey(newKey, arrKeys);
      // if theres no key in array and then add 1
      if (!same) {
        arrKeys.push(newKey);
        arrVals.push(1);
      }
      else {
        arrVals[idx] += 1;
      }
    }
    // console.log("Array of Values");
    // console.log(arrVals);

    let finalArr: any = [];
    for (const product of appState.cartList.cart) {
      if (!containsProduct(product, finalArr)) {
        finalArr.push(product);
      }
    }
    // console.log("Final Array");
    // console.log(finalArr)
    // console.log("State of Cart")
    // console.log(appState.cartList.cart);

    type Key = {
      id: number,
      size: string
    };

    const getQuantity = (k: Key, arr: Array<any>) => {
      const {same, idx} = containsProductKey(k, arr);
      return idx;
    }

    // Set the cart variable
    setCart(
      finalArr.map(
          (product: any) => 
              <CartProduct 
              id={product.productId} 
              name={product.productName} 
              price={product.productPrice}
              description={product.productDescription}
              type={product.productType}
              url={product.productImgUrl}
              size={product.size}
              quantity={arrVals[getQuantity(
                {
                  id: product.productId,
                  size: product.size
                }, arrKeys)]}
              key={product.productId} />
          ));
  }

  useEffect(() => {
      console.log(appState.cartList.cart);
      loadCart();
      
  }, [appState.cartList.cart]);

  const getTotalPrice = () => {
    let currTotal = 0.00;
    for (const product of appState.cartList.cart) {
        currTotal += product.productPrice;
    }
    return currTotal;
  }


  return (
  <section className="h-100 h-custom" > {/* style={{backgroundColor: 'white'}} */}
    <div className="container py-4"> {/* h-100 was in the container but take out because it messes with the rendering of the container, below row also had it removed but because I couldn't tell if it was actually doing anything and I think it would interfere when you put more than like 5 things in the cart*/}
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col">
          <div className="card shopping-cart" style={{borderRadius: '15px'}}>
            <div className="card-body ">
              {/* text-black was in the classname but need to change thr product card color so you can actually see it */}

              <div className="row">
                {/* shopping cart side of the card */}
                <div className="col-lg-6 px-5 py-4">

                  <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Shopping Cart</h3>
                  {/* item in the shopping cart */}
                    {cart}
                  
                  {/* bar separating cart from the total 
                    backgroundColor used to be lightblue
                  */}
                  <hr className="mb-4" style={{height: '2px', opacity: 1}}/>

                  {/* the total bar color and text style={{backgroundColor: 'lightskyblue' }}*/}
                  <div className="d-flex justify-content-between p-2 mb-2" >
                    <h5 className="fw-bold mb-0">Total:</h5>
                    <h5 className="fw-bold mb-0">${getTotalPrice()}</h5>

                  </div>

                </div>
                {/* payment side of the card */}
                <div className="col-lg-6 px-5 py-4">

                  <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>

                  <form className="mb-5">

                    <div className="form-outline mb-5">
                      <h6>Card Number</h6>
                      <input type="number" id="typeText" className="form-control form-control-lg" size={17} minLength={13} maxLength={19} placeholder="1234 5678 1234 5678" />
                      <label className="form-label" htmlFor="typeText"></label>
                    </div>

                    <div className="form-outline mb-5">
                      <h6>Name on Card</h6>
                      <input type="text" id="typeName" className="form-control form-control-lg" size={17} placeholder="Jenny James" />
                      <label className="form-label" htmlFor="typeName"></label>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-5">
                        <div className="form-outline">
                          <h6>Expiration</h6>
                          <input type="text" id="typeExp exp" className="form-control form-control-lg" 
                            size={7}  minLength={5} maxLength={5} placeholder="MM/YY" />
                          <label className="form-label" htmlFor="typeExp"></label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-5">
                        <div className="form-outline">
                          <h6>CVV</h6>
                          <input type="password" id="typeText1" className="form-control form-control-lg" size={1} minLength={3} maxLength={4} placeholder="1234" />
                          {/* originally typeText, not typeText1 because Chrome was fussing at me about it not being unique */}
                          <label className="form-label" htmlFor="typeText"></label>
                        </div>
                      </div>
                    </div>

                    <p className="mb-5">Complete your order below and thank you for shopping at Spoint, <br/>where blue is beautiful.</p>

                    <button type="button" onClick={sendEmail} className="btn btn-danger btn-lg">Place Your Order</button>


                    <h5 className="fw-bold mb-5 pt-5"  >
                      <a href="/home"><i 
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