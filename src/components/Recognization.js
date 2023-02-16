import React from 'react';
import './Recognization.css';

function Recognization() {
  return (
    <div className='recognization'>
        <div className='process'>
            <h2 className='title'>The Whole Work process</h2>
            <img src='images/wholework.JPG' className='pro'></img>
            <p className='comment'>
                We could roughly devide the whole work into two part: <strong>Signal Simulation</strong> part,
                and <strong>Signal Processing</strong> part.
                <br></br><br></br>
                Step 1, 2 and 3 could be regarded as Signal Simulation. 
                We try to analyze the bird's structure and flight characteristics
                for estimating the general bird's dynamic flapping wing model. And
                according to the radar cross section (RCS) of birds, we try to 
                establish the corresponding radar echo model in order to simulate received
                radar signals.
                <br></br><br></br>
                 And for Signal Process part, it contains micro-Doppler feature
                 enhancement and micro-Doppler feature extraction.

             </p>
        </div>
    </div>
  )
}

export default Recognization