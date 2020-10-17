import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import ImageLoader from '../ImageLoader';
import HeroBanner from '../../images/hero-banner-home.png';
import {bannerZoomIn} from '../../utils';

export default ({}) => {
    useEffect(() => {
        bannerZoomIn();
    }, []);
    const props = useSpring({from: {opacity: 0}, opacity: 1});
    return <animated.div className="banner-image"><img className='banner-image-img' src={HeroBanner} alt='the world we want'/></animated.div>
}