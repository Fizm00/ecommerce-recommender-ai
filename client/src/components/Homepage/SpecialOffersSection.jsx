import React, { useState, useEffect } from 'react';
import { FaClock, FaFire, FaPercentage, FaShoppingCart } from 'react-icons/fa';

const SpecialOffersSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 15,
        minutes: 32,
        seconds: 45
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const offers = [
        {
            id: 1,
            title: 'Laptop Gaming ROG',
            originalPrice: 25000000,
            discountPrice: 18500000,
            discount: 26,
            image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=2070&auto=format&fit=crop',
            stock: 12
        },
        {
            id: 2,
            title: 'iPhone 15 Pro Max',
            originalPrice: 22000000,
            discountPrice: 19800000,
            discount: 10,
            image: 'https://images.unsplash.com/photo-1592286049917-e4456b5a6552?q=80&w=2070&auto=format&fit=crop',
            stock: 8
        },
        {
            id: 3,
            title: 'Sony WH-1000XM5',
            originalPrice: 5500000,
            discountPrice: 4400000,
            discount: 20,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
            stock: 25
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-800 to-indigo-900 text-white px-6 py-2 rounded-full font-bold text-sm mb-4">
                        <FaFire className="animate-pulse" />
                        <span>FLASH SALE</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Penawaran Terbatas
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Dapatkan diskon fantastis untuk produk pilihan. Terbatas waktu!
                    </p>

                    {/* Countdown Timer */}
                    <div className="flex justify-center items-center space-x-4 mb-8">
                        <FaClock className="text-2xl text-indigo-600" />
                        <div className="flex space-x-2">
                            {[
                                { label: 'Hari', value: timeLeft.days },
                                { label: 'Jam', value: timeLeft.hours },
                                { label: 'Menit', value: timeLeft.minutes },
                                { label: 'Detik', value: timeLeft.seconds }
                            ].map((item, index) => (
                                <div key={index} className="text-center">
                                    <div className="bg-gradient-to-b from-gray-800 to-indigo-900 text-white px-4 py-3 rounded-xl font-bold text-2xl min-w-16 shadow-lg">
                                        {String(item.value).padStart(2, '0')}
                                    </div>
                                    <div className="text-xs text-gray-600 font-medium mt-1">
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offers.map((offer) => (
                        <div key={offer.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-indigo-200">
                            <div className="relative">
                                <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute top-4 left-4 bg-gradient-to-r from-gray-800 to-indigo-900 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                                    <FaPercentage size={10} />
                                    <span>{offer.discount}% OFF</span>
                                </div>
                                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                                    Stock: {offer.stock}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                                <div className="flex items-center space-x-2 mb-4">
                                    <span className="text-sm text-gray-500 line-through">
                                        Rp{offer.originalPrice.toLocaleString('id-ID')}
                                    </span>
                                    <span className="text-2xl font-bold text-indigo-600">
                                        Rp{offer.discountPrice.toLocaleString('id-ID')}
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                                    <div
                                        className="bg-gradient-to-r from-gray-800 to-indigo-900 h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${Math.max(10, (offer.stock / 30) * 100)}%` }}
                                    ></div>
                                </div>
                                <button className="w-full bg-gradient-to-r from-gray-800 to-indigo-900 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg">
                                    <FaShoppingCart />
                                    <span>Beli Sekarang</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-gradient-to-r from-gray-800 to-indigo-900 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Lihat Semua Penawaran
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffersSection;