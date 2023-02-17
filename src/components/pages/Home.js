import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';

import Footer from '../Footer';
import About from '../About';
import Recognization from '../Recognization';
import Simulation from '../Simulation';
import Process from '../Process';
import Results from '../Results';
function Home () {
    return (
        <>
            <HeroSection />
            <About />
            <Recognization />
            <Simulation />
            <Process />
            <Results />
            <Footer />
        </>
    );
}

export default Home;

