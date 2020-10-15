import React from 'react';
import whatwedo1 from '../../../images/Whatwedo_1.png';
import whatwedo2 from '../../../images/Whatwedo_2.png';


export default ({}) => {
    return <div class='whatwedo-section-container'>
        <div className="title">WHAT WE DO</div>
        <div class='description'>Through hero ventures,  accelerators and tapping our areas of expertise, we help make the global goals a part of everyday life and lingo</div>
        <div className="whatwedo-container">
            <div className="whatwedo-area">
                <img className="whatwedo-img" src={whatwedo1}></img>
                <div className="whatwedo-title">TASHAN</div>
                
            </div>
            <div className="whatwedo-area">
                <img className="whatwedo-img"  src={whatwedo2}></img>
                <div className="whatwedo-title">RESPONSIBLE BUSINESS</div>
                
            </div>
        </div>
        </div>

}