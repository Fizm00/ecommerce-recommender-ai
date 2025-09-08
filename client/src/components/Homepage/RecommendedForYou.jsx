import React from 'react';
import ProductCard from './Productcard';
import { FaUserCheck } from 'react-icons/fa';

// Nanti, data ini akan diganti dengan hasil dari AI Collaborative Filtering 
const mockRecommendedProducts = [
    { id: 5, name: 'Smartwatch GT3', category: 'Wearable Tech', price: 3200000, imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop' },
    { id: 6, name: 'Running Shoes X-Fly', category: 'Sports', price: 1100000, imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop' },
    { id: 7, name: 'Minimalist Wooden Desk', category: 'Furniture', price: 4500000, imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1974&auto=format&fit=crop' },
    { id: 8, name: 'Organic Green Tea Set', category: 'Food & Drink', price: 350000, imageUrl: 'https://images.unsplash.com/photo-1576092762791-d2403a16c592?q=80&w=2070&auto=format&fit=crop' },
];

const RecommendedForYou = () => {
    return (
        <div className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center mb-8">
                    <FaUserCheck className="text-3xl text-indigo-600 mr-4" />
                    <h2 className="text-3xl font-bold text-center text-gray-800">
                        Rekomendasi Untuk Anda
                    </h2>
                </div>
                <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                    Produk-produk ini dipilih secara khusus untuk Anda berdasarkan histori dan preferensi belanja Anda.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mockRecommendedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecommendedForYou;