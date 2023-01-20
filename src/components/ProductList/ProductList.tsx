import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductList } from '../../actions/ProductListActions'
import Product from '../Product/Product';
import '../DarkMode/DarkMode.css'

const ProductList: React.FC<any> = () => {
    const appState = useSelector<any, any>((state) => state);
    const dispatch = useDispatch();

    let [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        console.log(appState.productList.products);
        setProducts(
            appState.productList.products.map(
                (product: any) => 
                    <Product id={product.productId} name={product.productName} 
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
        {/* <button onClick={getProducts}>Get Products!</button> 
        removed from the section tag style={{backgroundColor: 'ivory'}} */}
        <section> 
            <div className ="container py-5">
                <h4 className="mt-4 mb-5"><strong>Shop Spoint</strong></h4>
                <div className ="row">
                    {products}
                </div>
                <br />
             </div>
        </section>
    </div>
  )
}

export default ProductList