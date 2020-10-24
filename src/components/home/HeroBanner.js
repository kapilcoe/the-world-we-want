import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import ImageLoader from '../ImageLoader';
import HeroBanner from '../../images/hero-banner-home.png';
import {bannerZoomIn} from '../../utils';
import BannerVideo from '../../video/banner-video.mp4';

const videoStyle = {
    width: '100%',
}
export default ({}) => {
    useEffect(() => {
        document.getElementById('banner-video').play();
        document.body.addEventListener('click', () => {
            const vidEl = document.getElementById('banner-video');
            vidEl && (vidEl.muted = false);
        });
    }, []);
    const props = useSpring({from: {opacity: 0}, opacity: 1});
    return <div className="banner-image"><video id='banner-video' muted style={videoStyle} loop autoplay className='banner-image-img' alt='the world we want'>
            <source src={BannerVideo} type="video/mp4"></source>
        </video></div>
}