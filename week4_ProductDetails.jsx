import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Product Details for ID: {id}</h2>
      <p>More product info would go here...</p>
    </div>
  );
};

export default ProductDetails;