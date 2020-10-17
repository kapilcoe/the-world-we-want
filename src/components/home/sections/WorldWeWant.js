import React,{useEffect} from 'react';
import socialimg1 from '../../../images/social_img1.png';
import socialimg2 from '../../../images/social_img2.png';
import socialimg3 from '../../../images/social_img3.png';
import socialimg4 from '../../../images/social_img4.png';
import socialimg5 from '../../../images/social_img5.png';
import socialimg6 from '../../../images/social_img6.png';
import {scrollscreenshow} from '../../../utils';

export default ({}) => {
    useEffect(() => {
        scrollscreenshow();
    }, []);
    return <div className="world-wewant-container">
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
                        <img className="social-post-area-img show-on-scroll" src={socialimg6}></img>
                    </div>
                
                </div>
            </div>
}