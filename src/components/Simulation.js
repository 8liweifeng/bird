import React from 'react'
import './Simulation.css';
function Simulation() {
  return (
    <div className='Simulation'>
        <div className='container'>
            <h2 className='title'>Signal Simulation</h2>
            <div className='model'>
                <div className='sub-title'>
                    <i class="fa-solid fa-dove"></i>
                    <h3 className='smalltitle'>Bird Structure Modeling</h3>
                </div>
                <p className='Scomment'>Because most birds have the similar structure,
                 we could simplify it and make a simpler model.</p>
                 <div className='photo-con'>
                    <div className='photo'>
                        <img src='images/arm.JPG' className='pro'></img>
                        <i class="fa-solid fa-circle-arrow-right"></i>
                        <img src='images/sarm.JPG' className='pro'></img>
                    </div>
                 </div>
                 <p className='Scomment'>And according to theoretical formulas of the flight of bird, the model could be estimated.</p>
                 <div className='photo-con'>
                    <div className='photo1'>
                        <div className='track'>
                            <img src='images/track1.png' className='pro'></img>
                            <img src='images/track2.png' className='pro'></img>
                        </div>
                        <img src='images/birdmodel.gif'></img>
                    </div>
                 </div>
            </div>

            <div className='model'>
            <div className='sub-title'>
                <i class="fa-solid fa-satellite-dish"></i>
                <h3 className='smalltitle'>Radar Echo Modeling</h3>
            </div>  
            <p className='Scomment'>According to the formulars below, the radar echo signal of birds could be simulated. </p>
            <div className='photo1'>
            <img src='images/formular.JPG' className='pro1'></img>
            </div>
            
            </div>
         </div>   
    </div>
  )
}

export default Simulation