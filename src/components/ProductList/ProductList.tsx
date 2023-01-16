import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductList } from '../../actions/ProductListActions'
import Product from '../Product/Product';

const ProductList: React.FC<any> = () => {
    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();

    let [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(appState.productList.products);
        setProducts(
            appState.productList.products.map(
                (product: any) => 
                    <Product name={product.productName} 
                    price={product.productPrice}
                    description={product.productDescription}
                    type={product.productType}
                    url={product.productImgUrl}
                    key={product.productId} />
                ));
    }, [appState.productList.products]);

    const getProducts = async () => {
        await dispatch(
        getProductList() as any
        );
    }

  return (
    <div>
        <button onClick={getProducts}>Get Products!</button>
        <div>{products}</div>
    </div>
  )
}

export default ProductList