// ProductDetails.js

import React from 'react';

const ProductDetails = ({ match }) => {
  const productId = match.params.id;

  // You can fetch more details about the product using the productId

  return (
    <div>
      <h1>Product Details for ID {productId}</h1>
      {/* Add more details about the product */}
    </div>
  );
};

export default ProductDetails;
