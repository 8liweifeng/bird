import React from 'react';
import "./Process.css";

function Process() {
  return (
    <div className='Process'>
        <div className='container'>
            <h2 className='title'>Signal Processing</h2>
            <div className='feature'>
                <div className='sub-title'>
                    <i class="fa-solid fa-satellite-dish"></i>
                    <h3 className='smalltitle'>Micro-Doppler Feature Extraction</h3>
                </div>

                <div className='info'>
                    <h2 className='title'>STFT(Short-Time Fourier Transform)</h2>
                    <p className='intro'>
                        It is a kind of Time–frequency analysis(a common technique 
                        for studying signals whose spectral characteristics change 
                        over time). It can be regarded as a simple deformation of Fourier 
                        transform, which localizes time and frequency at the same time.
                        For computing STFT, we divide a longer time signal into shorter 
                        segments of equal length and then compute the Fourier transform 
                        separately on each shorter segment. Finally, we use integral to 
                        obtain overall results.
                    </p>
                    <div className='detail'>
                        <div className='function1'>
                            <p className='fun-title'>
                            <strong>Continuous-time STFT</strong>
                            </p>
                            <img src='./images/continous.JPG' alt='' className='fun'></img>
                        </div>  

                        <div className='function2'>
                            <p className='fun-title'>
                            <strong>Discrete-time STFT</strong>
                            </p>
                            <img src='./images/discrete.JPG' alt='' className='fun'></img>
                        </div>        
                    </div>
                </div>

                
               
            </div>

            <div className='feature'>
                <div className='sub-title'>
                    <i class="fa-solid fa-satellite-dish"></i>
                    <h3 className='smalltitle'>Micro-Doppler Feature Enhancement</h3>
                </div>  

                <div className='info'>
                    <h2 className='title'>ADMM(Alternating Direction Method of
Multipliers)</h2>
                    <p className='intro'>
                    ADMM is an algorithm that is intended to blend the decomposability
                    of dual ascent with the superior convergence properties of the method
                    of multipliers. 
                    In ADMM, dual decomposition on the variables would be performed first. 
                    Then the optimization equation is established based on the augmented 
                     Lagrangian function. At the same time, Gaussian-Seidel method is used in
                     iteration part, 
                     ADMM decomposes a large optimization problem into several small 
                     sub-optimization problems, and finally uses decomposition-harmony 
                     to achieve the approximation to the optimal solution
                    </p>
                    
                        <div className='function2'>
                            <img src='./images/ADMM.JPG' alt='' className='fun'></img>
                        </div>        
                    
                </div>
            </div>
            
           
         </div>
    </div>
  )
}

export default Process