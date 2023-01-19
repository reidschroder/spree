import React from 'react'
import FeaturedProductsList from '../FeaturedProductsList/FeaturedProductsList'
import ProductList from '../ProductList/ProductList'
import "./Home.css"

const Home: React.FC<any> = () => {
  
  
  return (
    <div>
      <FeaturedProductsList/>
      {/* Add bar here */}
      <hr className="solid"></hr>
      <ProductList/>
    </div>
  )
}

export default Home