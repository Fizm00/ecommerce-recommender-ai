import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
      <div className="relative">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white text-gray-900 font-bold py-2 px-4 rounded-full flex items-center space-x-2">
            <FaShoppingCart />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="text-gray-500 text-sm mt-1">{product.category}</p>
        <p className="text-xl font-bold text-gray-900 mt-2">Rp{product.price.toLocaleString('id-ID')}</p>
      </div>
    </div>
  );
};

export default ProductCard;