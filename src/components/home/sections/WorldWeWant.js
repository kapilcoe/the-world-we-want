import React from 'react';
import socialimg1 from '../../../images/social_img1.png';
import socialimg2 from '../../../images/social_img2.png';
import socialimg3 from '../../../images/social_img3.png';
import socialimg4 from '../../../images/social_img4.png';
import socialimg5 from '../../../images/social_img5.png';
import socialimg6 from '../../../images/social_img6.png';

export default ({}) => {
    return <div class='world-wewant-container'>
        <div className="wrapper"><h1>#THEWORLDWEWANT</h1>
            <p>Engage with us and be a part of our journey</p>
                <div className="social-post-container">
                    <div className="social-post-area">
                        <img className="social-post-area-img" src={socialimg1}></img>
                        
                    </div>
                    <div className="social-post-area">
                        <img className="social-post-area-img"  src={socialimg2}></img>
                        
                    </div>
                    <div className="social-post-area">
                        <img className="social-post-area-img" src={socialimg3}></img>
                        
                    </div>
                    <div className="social-post-area">
                        <img className="social-post-area-img" src={socialimg4}></img>
                        
                    </div>
                    <div className="social-post-area">
                        <img className="social-post-area-img" src={socialimg5}></img>
                        
                    </div>
                    <div className="social-post-area">
                        <img className="social-post-area-img" src={socialimg6}></img>
                        
                    </div>
                
                </div>
        </div>
    </div>
}