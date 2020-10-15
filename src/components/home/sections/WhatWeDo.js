import React from 'react';
import whatwedo1 from '../../../images/Whatwedo_1.png';
import whatwedo2 from '../../../images/Whatwedo_2.png';


export default ({}) => {
    return <div class='whatwedo-section-container'>
        <div className="wrapper"><h1>What WE DO</h1><p>Through hero ventures,  accelerators and tapping our areas of expertise, we help make the global goals a part of everyday life and lingo</p>
            <div className="whatwedo-container">
                <div className="whatwedo-area">
                    <img className="whatwedo-img" src={whatwedo1}></img>
                    <div className="whatwedo-title"><h1>Tashan</h1></div>
                    
                </div>
                <div className="whatwedo-area">
                    <img className="whatwedo-img"  src={whatwedo2}></img>
                    <div className="whatwedo-title"><h1>Responsible</h1></div>
                    
                </div>
            </div>
        </div>

    </div>
}