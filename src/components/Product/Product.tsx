import React, { useState } from "react";

const Product: React.FC<any> = (props: any) => {

  const [productId, setProductId] = useState(0);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productType, setProductType] = useState("");
  const [productSize, setProductSize] = useState("");

  return (
  <div>Product</div>);
};

export default Product;
