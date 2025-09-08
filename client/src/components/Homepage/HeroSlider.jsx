import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop',
        title: 'Koleksi Gadget Terbaru',
        subtitle: 'Diskon hingga 30% untuk semua item!',
        buttonText: 'Belanja Sekarang',
    },
    {
        image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop',
        title: 'Fashion Wanita Terkini',
        subtitle: 'Tampil gaya dengan koleksi fashion terbaru kami.',
        buttonText: 'Lihat Koleksi',
    },
    {
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop',
        title: 'Peralatan Rumah Tangga',
        subtitle: 'Jadikan rumah Anda lebih nyaman.',
        buttonText: 'Cari Disini',
    },
];

const slideVariants = {
    hidden: (direction) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    visible: {
        x: '0%',
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
    exit: (direction) => ({
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
        transition: {
            type: 'tween',
            duration: 0.5,
            ease: 'easeInOut',
        },
    }),
};

const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    }),
};

const textItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    },
};

const HeroSlider = () => {
    const [[currentSlide, direction], setSlide] = useState([0, 0]);

    const nextSlide = () => {
        setSlide([currentSlide === slides.length - 1 ? 0 : currentSlide + 1, 1]);
    };

    const prevSlide = () => {
        setSlide([currentSlide === 0 ? slides.length - 1 : currentSlide - 1, -1]);
    };

    const goToSlide = (index) => {
        setSlide([index, index > currentSlide ? 1 : -1]);
    }

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setSlide(([prevSlide]) => [
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1,
                1
            ]);
        }, 5000);
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-0 left-0 w-full h-full"
                >
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <motion.div
                            className="w-full max-w-4xl text-center text-white p-4"
                            variants={textContainerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.h1
                                variants={textItemVariants}
                                className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
                            >
                                {slides[currentSlide].title}
                            </motion.h1>
                            <motion.p
                                variants={textItemVariants}
                                className="mt-4 text-lg md:text-2xl drop-shadow-md"
                            >
                                {slides[currentSlide].subtitle}
                            </motion.p>
                            <motion.div variants={textItemVariants}>
                                <button className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300">
                                    {slides[currentSlide].buttonText}
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <button onClick={prevSlide} className="z-10 absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 p-3 rounded-full text-gray-800 transition">
                <FaChevronLeft />
            </button>
            <button onClick={nextSlide} className="z-10 absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 p-3 rounded-full text-gray-800 transition">
                <FaChevronRight />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-indigo-600' : 'bg-white/50'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;