import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delProduct } from '../../actions/CartCheckoutActions';

const CartProduct: React.FC<any> = (props: any) => {
    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();

    const removeFromCart = async (delItem: any) => {
        // delItem is the event item
        // we want to see/check what attribute is the id of the product
        // then do dispatch 
        // if (delItem.target.productId ===)
        let newCart = appState.cartList.cart;
        console.log(newCart);
        

        await dispatch(delProduct(appState.cartList.cart, props.id, props.size) as any);


    }

    return (
    <div className="d-flex align-items-center mb-5">
        <div className="flex-shrink-0">
            <img src={props.url}
            className="img-fluid" style={{width: '150px'}} alt="Generic placeholder"/>
        </div>
        <div className="flex-grow-1 ms-3">
            <a href="#!" className="float-end text-black"><i className= "fas fa-times" onClick={removeFromCart}></i></a>
            <h5>{props.name}</h5>
            <h6>Size: {props.size} </h6>
            <p className='mt-1'>Price: {props.price}</p>
            <p>Quantity: {props.quantity}</p>
        </div>
    </div>
    )
}

export default CartProduct