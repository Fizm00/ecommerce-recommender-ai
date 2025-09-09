import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/Homepage/HeroSlider';
import FeaturedProducts from '../components/Homepage/FeaturedProducts';
import RecommendedForYou from '../components/Homepage/RecommendedForYou';
import SpecialOffersSection from '../components/Homepage/SpecialOffersSection';
import CategoriesSection from '../components/Homepage/CategoriesSection';
import NewsletterCTASection from '../components/Homepage/NewsletterCTASection';
import Footer from '../components/Footer';

const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 60
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const fadeInLeft = {
    hidden: {
        opacity: 0,
        x: -60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const fadeInRight = {
    hidden: {
        opacity: 0,
        x: 60
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const scaleIn = {
    hidden: {
        opacity: 0,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const fadeIn = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
};

const slideInUp = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: "easeOut"
        }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const Homepage = () => {
    return (
        <div className="bg-white overflow-x-hidden">
            <Navbar />

            <motion.main
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.section
                    variants={fadeIn}
                    viewport={{ once: true, margin: "-100px" }}
                    whileInView="visible"
                    initial="hidden"
                >
                    <HeroSlider />
                </motion.section>

                <motion.section
                    variants={fadeInLeft}
                    viewport={{ once: true, margin: "-100px" }}
                    whileInView="visible"
                    initial="hidden"
                >
                    <CategoriesSection />
                </motion.section>

                <motion.section
                    variants={fadeInUp}
                    viewport={{ once: true, margin: "-100px" }}
                    whileInView="visible"
                    initial="hidden"
                >
                    <FeaturedProducts />
                </motion.section>

                <motion.section
                    variants={scaleIn}
                    viewport={{ once: true, margin: "-100px" }}
                    whileInView="visible"
                    initial="hidden"
                >
                    <SpecialOffersSection />
                </motion.section>

                <motion.section
                    variants={fadeInRight}
                    viewport={{ once: true, margin: "-100px" }}
                    whileInView="visible"
                    initial="hidden"
                >
                    <RecommendedForYou />
                </motion.section>

                <motion.section
                    variants={slideInUp}
                    viewport={{ once: true, margin: "-100px" }}
                    whileInView="visible"
                    initial="hidden"
                >
                    <NewsletterCTASection />
                </motion.section>
            </motion.main>

            <Footer />

            <ScrollToTopButton />
        </div>
    );
};

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-gray-900 via-gray-800 to-indigo-900 hover:from-indigo-600 hover:to-purple-700 text-white rounded-full shadow-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 20
            }}
            transition={{ duration: 0.3 }}
            aria-label="Scroll to top"
        >
            <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
            </motion.svg>
        </motion.button>
    );
};

export default Homepage;