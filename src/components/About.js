import React from 'react';
import './About.css';


function About() {
  return (
    <div className='About'>
        <div className='about-container'>
            <img className='radar' src='images/radar.png'></img> 
            <div className='info'>
            
                <h2 className='title'>Introduction</h2>
                <p className='intro'>This is a radar-based technology that detects and recognizes birds, reducing the risk of bird strikes and potential threats
from bird-like aircraft, to ensure the safety of airplanes</p>
                <div className='detail'>
                      <p>Recently, bird strikes have occurred frequently, and bird-like aircraft such as bionic
flapping wing planes pose a potential threat to humans' security. Radar has the
properties of radio detection and distance measurement. Using radar to identify bird targets
can reduce the occurrence of events above.<br></br><br></br>
In this project, the bird's dynamic flapping wing model which is suitable for most kinds
of birds could be established through the bird's structure and flight characteristics. And
according to this dynamic model, the radar cross section (RCS) of birds which would be
used to establish the corresponding radar echo model could be calculated roughly. Using
time-frequency analysis, such as Short-Time Fourier Transform (STFT), to process the
echo signals, the micro-Doppler features of birds could be extracted. And Alternating
Direction Method of Multipliers (ADMM) could be used to enhance the micro-Doppler
features to improve the problems that the features are unextractable.

                      </p>             
                </div>
            </div>
        </div>
    </div>
  )
}

export default About