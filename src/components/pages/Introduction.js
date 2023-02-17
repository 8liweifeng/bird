import React from 'react';
import '../../App.css';


import About from '../About';
import Recognization from '../Recognization';
// import Simulation from '../Simulation';
// import Process from '../Process';
// import Results from '../Results';

function Introduction() {
  return (
    <div>
      
            <About />
            <Recognization />
            {/* <Simulation />
            <Process />
            <Results /> */}
            
    </div>
  )
}

export default Introduction