import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                    <CardItem src="images/img-9.jpg" 
                    text='Explore the world' label='Adventure' path='/services' />

                    <CardItem src="images/img-2.jpg" 
                    text='Travel' label='Luxury' path='/services' />
                </ul>

                <ul className='cards_items'>
                    <CardItem src="images/img-3.jpg" 
                    text='Ocean' label='Mystery' path='/services' />

                    <CardItem src="images/img-4.jpg" 
                    text='Football' label='Adventure' path='/Products' />

                    <CardItem src="images/img-8.jpg" 
                    text='Ride' label='Adventure' path='/sign-up' />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards