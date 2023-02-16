import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import About from '../About';
import Recognization from '../Recognization';
import Simulation from '../Simulation';
import Process from '../Process';
function Home () {
    return (
        <>
            <HeroSection />
            <About />
            <Recognization />
            <Simulation />
            <Process />
            
            <Footer />
        </>
    );
}

export default Home;

