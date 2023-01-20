import { any } from 'prop-types';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProduct } from '../../actions/CartCheckoutActions';
import "./ProductPage.css"

//make sure back arrow links back to home or wherever they came from
//add to cart needs to add things to cart, and either take you to cart or home
//Template Literals: images, product name, product description, price

//if implementing dis-price product price uncomment code and make .act-price red again in the css

const ProductPage: React.FC<any> = (props: any) => {
    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();

    // countRef is a reference to the <input> element that holds the item quantity
    const countRef = useRef<HTMLInputElement>(null);

    // Converts path variable id into a usable value
    const { id } = useParams() as any;
    // Converts id from string to number type
    const productId = parseInt(id);

    const [quantity, setQuantity] = useState(0);
    const [size, setSize] = useState("");

    const getProduct = () => {
        for (const p of appState.productList.products) {
            if (p.productId === productId) {
                return p;
            }
        }
    }
    const [product, setProduct] = useState(getProduct());

    const increment = (input: any) => {
        if (input.target.className === "plus") {
            input.target.parentNode.querySelector('input[type=number]').stepUp()
            if (countRef.current) {
                console.log(countRef.current.value);
                setQuantity(parseInt(countRef.current.value));
            }
            return
        }
        else {
            input.target.parentNode.querySelector('input[type=number]').stepDown()
            if (countRef.current) {
                console.log(countRef.current.value);
                setQuantity(parseInt(countRef.current.value));
            }
            return 
        }
    }
   
    useEffect(() => console.log(productId), [productId]);
    useEffect(() => {
        if (productId > 0) 
            getProduct() 
    }, []);
    
    // gather size input for select dropdown
    const getInput = (input: any) => {
        if (input.target.id === "select1") {
            console.log(input.target.value)
            setSize(input.target.value);
        }
    }
    
    const addToCart = async () => {
       await dispatch(addProduct(appState.cartList.cart, productId, size, quantity) as any);
    }

    


  return (
    <div>
        <div className="container mt-5 mb-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                    <div className="card rounded shadow-sm">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="images">
                                    <div className="text-center"> 
                                        <img id="main-image" src={product.productImgUrl} alt='clothing' width={300} height={300}/> 
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product rounded p-4">
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
                                        <h5 className="text-uppercase">{product.productName}</h5>
                                        <div className="price d-flex flex-row align-items-center">
                                            <span className="act-price">{product.productPrice}</span>
                                            &nbsp;
                                            &nbsp;
                                            {/* <div className="ml-2">
                                                <small className="dis-price">$59</small> &nbsp;
                                                <span>40% OFF</span>
                                            </div> */}
                                        </div>
                                    </div>
                                    <p className="about">{product.productDescription}</p>
                                    <div className="sizes mt-5">
                                        <h6 className="text-uppercase"></h6>
                                        <select className="form-select mx-auto" id="select1" aria-label="Default select example" onChange={getInput}>
                                            <option className="option-menu" value="" disabled selected hidden>Size</option>
                                            <option className="option-menu" value="S">S</option>
                                            <option className="option-menu" value="M">M</option>
                                            <option className="option-menu" value="L">L</option>
                                        </select>
                                    </div>
                                    <br />

                                    <div className="mx-auto def-number-input number-input safari_only">
                                        <button onClick={increment}
                                            className="minus"></button>
                                        <input className="quantity fw-bold text-black" id="count1" ref={countRef} min="0" name="quantity" type="number" onChange={getInput}/>
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