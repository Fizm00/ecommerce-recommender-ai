import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/Homepage/HeroSlider';
import FeaturedProducts from '../components/Homepage/FeaturedProducts';
import RecommendedForYou from '../components/Homepage/RecommendedForYou';
import SpecialOffersSection from '../components/Homepage/SpecialOffersSection';
import CategoriesSection from '../components/Homepage/CategoriesSection';
import NewsletterCTASection from '../components/Homepage/NewsletterCTASection';
import Footer from '../components/Footer';


const Homepage = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <main>
                <HeroSlider />
                <CategoriesSection />
                <FeaturedProducts />
                <SpecialOffersSection />
                <RecommendedForYou />
                <NewsletterCTASection />
            </main>
            <Footer />
        </div>
    );
};

export default Homepage;