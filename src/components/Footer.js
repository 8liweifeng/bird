import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Welcome to contact me, and know more information
            </p>
            

            <div className='input-areas'>
                <form action=''>
                    <input type="email" name="email" 
                    placeholder='Your email' 
                    className='footer-input' />
                    <Button bottonStyle='btn--outline'>Send</Button>
                </form>

            </div>

        </section>

        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Me</h2>
                    <Link to='/sign-up'>Email</Link>
                    <Link to='/'>Address</Link>
                    <Link to='/'>School</Link>
                    <Link to='/'>Telephone</Link>
                    <Link to='/'>Portfolio</Link>
                </div>
                
            </div>

            <div className='footer-link-wrapper'>
             
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>

        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to="/" className='social-logo'>
                    CAUC <i class="fa-solid fa-plane-up"></i>
                    </Link>
                </div>
                <small className='website-rights'>Liwei &copy; 2023</small>
                
                
                <div className='social-icons'>
                    <Link className='social-icon-link facebook'
                    to="/"
                    target="_blank"
                    aria-label='Facebook'>
                        <i className='fab fa-facebook-f'/>
                    </Link>

                    <Link className='social-icon-link instagram'
                    to="/"
                    target="_blank"
                    aria-label='Instagram'>
                        <i className='fab fa-instagram'/>
                    </Link>

                    <Link class='social-icon-link linkedin'
                    to="/"
                    target="_blank"
                    aria-label='LinkedIn'>
                        <i className='fab fa-linkedin'/>
                    </Link>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default Footer