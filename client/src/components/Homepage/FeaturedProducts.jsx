import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProductCard from './ProductCard'; 
import { motion, AnimatePresence } from 'framer-motion';

// nanti ambil dari API/backend
const mockProducts = [
  { id: 1, name: 'Smartphone Pro X', category: 'Electronics', price: 12000000, imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, name: 'Noise Cancelling Headphones', category: 'Audio', price: 2500000, imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, name: 'Classic Leather Jacket', category: 'Fashion', price: 1800000, imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop' },
  { id: 4, name: 'Modern Coffee Maker', category: 'Home Appliances', price: 950000, imageUrl: 'https://images.unsplash.com/photo-1565452344018-a5e94c1d2a33?q=80&w=1974&auto=format&fit=crop' },
  { id: 5, name: 'Gaming Laptop', category: 'Electronics', price: 18000000, imageUrl: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=2069&auto=format&fit=crop' },
  { id: 6, name: 'Designer Watch', category: 'Fashion', price: 3200000, imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop' },
  { id: 7, name: 'Air Purifier', category: 'Home Appliances', price: 1500000, imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069&auto=format&fit=crop' },
  { id: 8, name: 'Wireless Speaker', category: 'Audio', price: 800000, imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2070&auto=format&fit=crop' },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const FeaturedProducts = () => {

  const getItemsPerSlide = () => {
    if (typeof window === 'undefined') return 4; 
    if (window.innerWidth >= 1280) return 4; 
    if (window.innerWidth >= 768) return 3; 
    if (window.innerWidth >= 640) return 2; 
    return 1; 
  };

  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide());
  const [[page, direction], setPage] = useState([0, 0]);

 
  useEffect(() => {
    const handleResize = () => setItemsPerSlide(getItemsPerSlide());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageCount = Math.ceil(mockProducts.length / itemsPerSlide);
  const productIndex = page * itemsPerSlide;

  const paginate = (newDirection) => {
    let newPage = page + newDirection;
    if (newPage < 0) {
      newPage = pageCount - 1;
    } else if (newPage >= pageCount) {
      newPage = 0;
    }
    setPage([newPage, newDirection]);
  };

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Produk Unggulan</h2>

        <div className="relative flex items-center justify-center" style={{ minHeight: '26rem' }}>

          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-white/80 hover:bg-white shadow-lg p-3 rounded-full text-gray-700 hover:text-gray-900 transition-all duration-200 hover:scale-110 -ml-4 md:-ml-6"
            onClick={() => paginate(-1)}
          >
            <FaChevronLeft size={20} />
          </div>

          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full px-4 md:px-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {mockProducts.slice(productIndex, productIndex + itemsPerSlide).map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-white/80 hover:bg-white shadow-lg p-3 rounded-full text-gray-700 hover:text-gray-900 transition-all duration-200 hover:scale-110 -mr-4 md:-mr-6"
            onClick={() => paginate(1)}
          >
            <FaChevronRight size={20} />
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: pageCount }).map((_, i) => (
            <div
              key={i}
              onClick={() => setPage([i, i > page ? 1 : -1])}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${i === page ? 'bg-indigo-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;