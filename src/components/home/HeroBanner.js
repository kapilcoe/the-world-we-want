import React from 'react';
import { useSpring, animated } from 'react-spring';
import ImageLoader from '../ImageLoader';
import HeroBanner from '../../images/hero-banner-home.png';

export default ({}) => {
    const props = useSpring({from: {opacity: 0}, opacity: 1});
    return <animated.div className="banner-image"><img src={HeroBanner} alt='the world we want'/></animated.div>
}