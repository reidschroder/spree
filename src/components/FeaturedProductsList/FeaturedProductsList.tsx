import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import '../DarkMode/DarkMode.css'

const FeaturedProductsList = () => {
    const appState = useSelector<any, any>((state) => state);

    const [featured, setFeatured] = useState([]);

    useEffect(() => getFeaturedProducts, [])

    const getFeaturedProducts = () => {
        let prodArr = appState.productList.products;
        prodArr.splice(3);
        setFeatured(
            prodArr.map(
                (product: any) =>
                    <FeaturedProducts
                        productId={product.productId}
                        name={product.productName} 
                        price={product.productPrice}
                        description={product.productDescription}
                        type={product.productType}
                        url={product.productImgUrl}
                        key={product.productId} />
            )
        );
    }

    return (
        <section>
            
            <div className="text-center container py-5">
            <h4 className="mt-4 mb-5"><strong>Featured Products</strong></h4>

            <div className="row">
                {featured}
            </div>
            </div>
        </section>
    )
}

export default FeaturedProductsList