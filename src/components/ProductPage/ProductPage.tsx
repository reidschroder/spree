import React from 'react'
import "./ProductPage.css"

//make sure back arrow links back to home or wherever they came from
//add to cart needs to add things to cart, and either take you to cart or home
//Template Literals: images, product name, product description, price

//if implementing dis-price product price uncomment code and make .act-price red again in the css

const ProductPage = () => {

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
                                            <a href="/home" className="back-arrow">
                                                <img className="image" src="/back arrow svg.svg" alt="back arrow"/>
                                            </a>  
                                        </div> 
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
                                        <h6 className="text-uppercase">Size</h6>
                                        <label className="radio">
                                            <input type="radio" name="size" value="S" checked/>
                                            <span>S</span>
                                            &nbsp;
                                        </label>
                                        <label className="radio"> 
                                            <input type="radio" name="size" value="M"/>
                                            <span>M</span>
                                            &nbsp;
                                        </label> 
                                        <label className="radio">
                                            <input type="radio" name="size" value="L"/>
                                            <span>L</span> 
                                        </label>
                                    </div>
                                    <br />
                                    <div>
                                        <a href="/home" className="minus-icon">
                                            <img className="image2" src="/minus-icon.svg" alt="quantity minus one"/>
                                        </a> 
                                        &nbsp;
                                        <input type="number" step="1" min="0" value="1" name="quantity" className="quantity-field border-0 text-center w-25"/>
                                        &nbsp;
                                        <a href="/home" className="plus-icon">
                                            <img className="image2" src="/plus-icon.svg" alt="quantity plus one"/>
                                        </a> 
                                    </div>
                                    <div className="cart mt-4 align-items-center">
                                        &nbsp;
                                        <button className="btn btn-danger text-uppercase mr-2 px-4">
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