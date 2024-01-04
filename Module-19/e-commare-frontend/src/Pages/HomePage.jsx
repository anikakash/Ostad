import React from 'react';
import HeroSection from '../Components/HeroSection';
import Featured from '../Components/Featured';
import ProductList from '../Components/ProductList';
import BlogList from '../Components/BlogList';

const HomePage = () => {
    return (
        <>
            <HeroSection/>
            <ProductList/>
            <Featured/>
            <BlogList/>
            
        </>
    );
};

export default HomePage;