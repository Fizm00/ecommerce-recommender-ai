import React from 'react';
import { FaLaptop, FaTshirt, FaHome, FaGamepad, FaBook, FaUtensils, FaBaby, FaCar } from 'react-icons/fa';

const categories = [
    { id: 1, name: 'Electronics', icon: FaLaptop, color: 'from-blue-500 to-indigo-600', items: '2,450+ produk' },
    { id: 2, name: 'Fashion', icon: FaTshirt, color: 'from-pink-500 to-rose-600', items: '5,200+ produk' },
    { id: 3, name: 'Home & Living', icon: FaHome, color: 'from-green-500 to-emerald-600', items: '1,800+ produk' },
    { id: 4, name: 'Gaming', icon: FaGamepad, color: 'from-purple-500 to-violet-600', items: '980+ produk' },
    { id: 5, name: 'Books & Media', icon: FaBook, color: 'from-orange-500 to-amber-600', items: '3,100+ produk' },
    { id: 6, name: 'Food & Beverage', icon: FaUtensils, color: 'from-red-500 to-pink-600', items: '1,500+ produk' },
    { id: 7, name: 'Baby & Kids', icon: FaBaby, color: 'from-cyan-500 to-blue-600', items: '750+ produk' },
    { id: 8, name: 'Automotive', icon: FaCar, color: 'from-gray-700 to-gray-900', items: '1,200+ produk' }
];

const CategoriesSection = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Jelajahi Kategori
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Temukan produk yang Anda cari dari berbagai kategori pilihan kami
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <div
                                key={category.id}
                                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                            >
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-indigo-200">
                                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <IconComponent className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 font-medium">
                                        {category.items}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;