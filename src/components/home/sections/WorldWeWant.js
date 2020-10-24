import React,{useEffect} from 'react';
import socialimg1 from '../../../images/post1.jpeg';
import socialimg2 from '../../../images/post2.jpeg';
import socialimg3 from '../../../images/post3.jpeg';
import socialimg4 from '../../../images/post4.jpeg';
import socialimg5 from '../../../images/post5.jpeg';
import socialimg6 from '../../../images/post6.mp4';
import {scrollscreenshow} from '../../../utils';
import NavLink from '../../NavLink';

export default ({}) => {
    useEffect(() => {
        scrollscreenshow();
        document.getElementById('social-video').play();
    }, []);
    return <NavLink 
        to={'/socialmedia'}
        exact>  
    <div className="world-wewant-container">
                <div className="world-title show-on-scroll">#THEWORLDWEWANT</div>
                <div className="world-description show-on-scroll">Engage with us and be a part of our journey</div>
                <div className="social-post-container">
                    <div className="social-post-area">
                        <img className="social-post-area-img show-on-scroll" src={socialimg1}></img>
                    </div>
                    <div className="social-post-area">
                        <img className="social-post-area-img show-on-scroll"  src={socialimg2}></img>
                    </div>
                    <div className="social-post-area">
                        <img className="social-post-area-img show-on-scroll" src={socialimg3}></img>
                    </div>
                    <div className="social-post-area">
                        <img className="social-post-area-img show-on-scroll" src={socialimg4}></img>
                    </div>
                    <div className="social-post-area">
                        <img className="social-post-area-img show-on-scroll" src={socialimg5}></img>
                    </div>
                    <div className="social-post-area">
                    <video height='100%' width='100%' id='social-video' muted loop autoplay alt='the world we want'>
                        <source src={socialimg6} type="video/mp4"></source>
                    </video>
                    </div>
                
                </div>
            </div>
            </NavLink>
}