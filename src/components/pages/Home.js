import '../../App.css';
import HeroSection from '../HeroSection';
import React from 'react';
import Cards from '../Cards';
import About from '../About';
import ContactPage from '../Contact';

function Home() {
return (
    <>
    <HeroSection />
    <Cards />
    <About />
    <ContactPage />
    </>
    );
}
export default Home;