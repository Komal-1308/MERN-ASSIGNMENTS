import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product A', price: '$20', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product B', price: '$30', image: 'https://via.placeholder.com/150' }
];

const ProductList = () => (
  <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {products.map(product => (
      <div key={product.id} className="border p-4 rounded shadow hover:shadow-lg transition">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p>{product.price}</p>
        <Link to={`/product/${product.id}`} className="text-blue-600 mt-2 block">View Details</Link>
      </div>
    ))}
  </div>
);

export default ProductList;