import React from 'react';
import heroImg from '../images/deadlift.jpeg';
import Home from './Home';


const Hero = () => {
    return (
        <div className='hero'>
            <img src={heroImg} alt="Deadlift barbell" className='hero__img' />
            <Home />
        </div>
    )
}

export default Hero