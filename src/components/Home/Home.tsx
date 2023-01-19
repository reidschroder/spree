import React from 'react'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import ProductList from '../ProductList/ProductList'
import "./Home.css"

const Home: React.FC<any> = () => {
  
  
  return (
    <div>
      <FeaturedProducts/>
      {/* Add bar here */}
      <hr className="solid"></hr>
      <ProductList/>
    </div>
  )
}

export default Home