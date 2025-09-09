import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { FaUserCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

// nanti ambil dari API/backend
const mockRecommendedProducts = [
    { id: 5, name: 'Smartwatch GT3', category: 'Wearable Tech', price: 3200000, imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop' },
    { id: 6, name: 'Running Shoes X-Fly', category: 'Sports', price: 1100000, imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop' },
    { id: 7, name: 'Minimalist Wooden Desk', category: 'Furniture', price: 4500000, imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1974&auto=format&fit=crop' },
    { id: 8, name: 'Organic Green Tea Set', category: 'Food & Drink', price: 350000, imageUrl: 'https://images.unsplash.com/photo-1576092762791-d2403a16c592?q=80&w=2070&auto=format&fit=crop' },
    { id: 9, name: 'Professional DSLR Camera', category: 'Electronics', price: 25000000, imageUrl: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2070&auto=format&fit=crop' },
    { id: 10, name: 'Modern Bookshelf', category: 'Furniture', price: 2800000, imageUrl: 'https://images.unsplash.com/photo-1588693951253-3301c2b534a2?q=80&w=1974&auto=format&fit=crop' },
    { id: 11, name: 'Scented Candle Collection', category: 'Home Decor', price: 450000, imageUrl: 'https://images.unsplash.com/photo-1594212699903-ec8a64e1f972?q=80&w=2070&auto=format&fit=crop' },
    { id: 12, name: 'Portable Bluetooth Speaker', category: 'Audio', price: 850000, imageUrl: 'https://images.unsplash.com/photo-1589256463837-19391a92eaf0?q=80&w=2070&auto=format&fit=crop' },
    { id: 13, name: 'Gourmet Coffee Beans', category: 'Food & Drink', price: 250000, imageUrl: 'https://images.unsplash.com/photo-1559042232-a0e4b4a1985f?q=80&w=1974&auto=format&fit=crop' },
    { id: 14, name: 'Yoga Mat Pro', category: 'Sports', price: 600000, imageUrl: 'https://images.unsplash.com/photo-1591291621164-2c6367723315?q=80&w=2071&auto=format&fit=crop' },
    { id: 15, name: 'Hardcover Notebook Set', category: 'Stationery', price: 220000, imageUrl: 'https://images.unsplash.com/photo-1531548530338-58157a3a89a7?q=80&w=2070&auto=format&fit=crop' },
    { id: 16, name: 'Ergonomic Office Chair', category: 'Furniture', price: 3500000, imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop' },
    { id: 17, name: 'Stainless Steel Water Bottle', category: 'Accessories', price: 300000, imageUrl: 'https://images.unsplash.com/photo-1602143407151-247e961d21a6?q=80&w=1964&auto=format&fit=crop' },
    { id: 18, name: 'Wireless Mouse', category: 'Electronics', price: 450000, imageUrl: 'https://images.unsplash.com/photo-1615663249843-c9cd543787a1?q=80&w=2070&auto=format&fit=crop' },
    { id: 19, name: 'Cozy Knit Blanket', category: 'Home Decor', price: 750000, imageUrl: 'https://images.unsplash.com/photo-1576402182903-6b81165d837a?q=80&w=1974&auto=format&fit=crop' },
    { id: 20, name: 'Stylish Sunglasses', category: 'Fashion', price: 1200000, imageUrl: 'https://images.unsplash.com/photo-1511498314042-8149a4a7993a?q=80&w=2070&auto=format&fit=crop' },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 10
        }
    }
};

const RecommendedForYou = () => {
    const [visibleCount, setVisibleCount] = useState(8);

    const loadMoreProducts = () => {
        setVisibleCount(prevCount => prevCount + 8);
    };

    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center mb-4">
                    <FaUserCheck className="text-3xl text-indigo-600 mr-4" />
                    <h2 className="text-3xl font-bold text-center text-gray-800">
                        Rekomendasi Untuk Anda
                    </h2>
                </div>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Produk-produk ini dipilih secara khusus untuk Anda berdasarkan histori dan preferensi belanja Anda.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {mockRecommendedProducts.slice(0, visibleCount).map((product, index) => (
                        <motion.div
                            key={product.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>

                {visibleCount < mockRecommendedProducts.length && (
                    <div className="text-center mt-12">
                        <button
                            onClick={loadMoreProducts}
                            className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                            Lihat Lebih Banyak
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecommendedForYou;