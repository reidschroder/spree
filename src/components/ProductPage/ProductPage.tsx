import { any } from 'prop-types';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../actions/CartCheckoutActions';
import "./ProductPage.css"

//make sure back arrow links back to home or wherever they came from
//add to cart needs to add things to cart, and either take you to cart or home
//Template Literals: images, product name, product description, price

//if implementing dis-price product price uncomment code and make .act-price red again in the css

const ProductPage: React.FC<any> = (props: any) => {
    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();

    const increment = (input: any) => {
        if (input.target.className === "plus") {
            return input.target.parentNode.querySelector('input[type=number]').stepUp()
        }
        else {
            return input.target.parentNode.querySelector('input[type=number]').stepDown()
        }
    }
    
    // gather input number/value to multiply for quantity select
    
    const addToCart = async () => {
       await dispatch(addProduct(appState.cartList.cart, props.id) as any);
    }


  return (
    <div>
        <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="images p-3">
                                    <div className="text-center p-4"> 
                                        <img id="main-image" src="https://i.imgur.com/Dhebu4F.jpg" alt='clothing' width={300}/> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product p-4">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center"> 
                                            {/* links back to home because it's a back button */}
                                            <a href="/home" className="back-arrow">
                                                <img className="image" src="/back arrow svg.svg" alt="back arrow"/>
                                            </a>  
                                        </div> 
                                        {/* shopping cart link */}
                                        <a href="/cart" className="shopping-cart">
                                            <img className="image" src="/shopping cart svg.png" alt="shopping cart"/>
                                        </a>
                                    </div>
                                    <div className="mt-4 mb-3">
                                        <span className="text-uppercase text-muted brand">Spoint</span>
                                        <h5 className="text-uppercase">Product Name</h5>
                                        <div className="price d-flex flex-row align-items-center">
                                            <span className="act-price">$20</span>
                                            &nbsp;
                                            &nbsp;
                                            {/* <div className="ml-2">
                                                <small className="dis-price">$59</small> &nbsp;
                                                <span>40% OFF</span>
                                            </div> */}
                                        </div>
                                    </div>
                                    <p className="about">Shop from a wide range of t-shirt from Spoint. Perfect for your everyday use, you could pair it with a stylish pair of jeans or trousers to complete the look.</p>
                                    <div className="sizes mt-5">
                                        <h6 className="text-uppercase"></h6>
                                        <select className="form-select mx-auto" aria-label="Default select example">
                                            <option className="option-menu" value="" disabled selected hidden>Size</option>
                                            <option className="option-menu" value="1">S</option>
                                            <option className="option-menu" value="2">M</option>
                                            <option className="option-menu" value="3">L</option>
                                        </select>
                                    </div>
                                    <br />

                                    <div className="mx-auto def-number-input number-input safari_only">
                                        <button onClick={increment}
                                            className="minus"></button>
                                        <input className="quantity fw-bold text-black" min="0" name="quantity" type="number"/>
                                        <button onClick={increment}
                                            className="plus"></button>
                                    </div>
                                    <div className="cart mt-4 align-items-center">
                                        &nbsp;
                                        <button className="btn btn-danger text-uppercase mr-2 px-4" onClick={addToCart}>
                                            Add To Cart
                                        </button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProductPage