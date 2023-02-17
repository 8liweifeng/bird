import React from 'react';
import "./Results.css";

function Results() {
  return (
    <div className='Results'>
        <div className='container'>
            <h2 className='title'>Achievements</h2>
            <div className='model'>
                <div className='sub-title'>
                <i class="fa-solid fa-circle-check"></i>
                    <h3 className='smalltitle'>Results</h3>
                </div>
                
                 <div className='photo-con'>
                    <div className='photo'>
                        <div className='rel'>
                            <p className='comment'>Signal without noise processed by STFT</p>
                            <img src='./images/original.png' alt='' className='pro'></img>
                        </div>
                        
                        <i class="fa-solid fa-circle-arrow-right"></i>
                        <div className='rel'>
                            <p className='comment'>Signal with noise processed by STFT</p>
                            <img src='./images/noise.png' alt='' className='pro'></img>
                        </div>
                        <i class="fa-solid fa-circle-arrow-right"></i>
                        <div className='rel'>
                            <p className='comment'>Signal with noise processed by STFT and ADMM</p>
                            <img src='images/enhance.png' alt='' className='pro'></img>
                        </div>
                    </div>
            </div>
            </div>

            <div className='model'>
                <div className='sub-title'>
                <i class="fa-solid fa-thumbs-up"></i>
                    <h3 className='smalltitle'>Innovation</h3>
                </div>
                <p className='Scomment'>Compared with bird structure models other people made, 
                I add the degree of freedom of wings, and turn the movement from Rigid body motion to 
                Non-rigid body motion. Moreover, I make up a way to calculate the lengths of the wings,
                so that we could roughly tell the sizes of birds and help the pilots make better decisions. </p>
                 <div className='photo-con'>
                    <div className='photo1'>
                        
                        <div className='rel'>
                            <p className='comment'>Model other made</p>
                            <img src='images/others.png' alt='' className='pro'></img>
                        </div>
                        
                        <i class="fa-solid fa-circle-arrow-right"></i>
                        <div className='rel'>
                            <p className='comment'>Model I made</p>
                            <img src='images/create.png' alt='' className='pro'></img>
                        </div>
                    </div>    
                </div>

                <p className='Scomment'>Information we could get from the results.</p>
                 <div className='photo-con'>
                    <div className='photo1'>
                        
                        <div className='rel'>
                            <img src='images/original.png' alt='' className='pro'></img>
                        </div>
                        
                        <i class="fa-solid fa-circle-arrow-right"></i>
                        <div className='rel'>
                            <ul>
                                <li>
                                    If the wings of a bird are flapping, the wareform is like a sin;
                                    If the bird is in a gliding state, the wareform is similar to a line. 
                                </li>
                                <li>
                                The central axis has a downward trend, the bird is flying away from the radar.
                                The central axis has a upward trend, the bird is flying close to the radar.
                                </li>
                                <li>
                                    The flapping frequency could be calculated.
                                </li>
                                <li>
                                    <strong>The lengths of wing would be calculated.</strong>
                                </li>
                            </ul>
                            
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    </div>
            

  )
}

export default Results