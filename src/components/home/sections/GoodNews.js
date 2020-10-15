import React from 'react';
import news_1 from '../../../images/news_1.png';
import news_2 from '../../../images/news_2.png';


export default ({}) => {
    return <div class='news-section-container'>
        <div className="wrapper"><h1>GOOD NEWS</h1>
            <div className="news-container">
                <div className="news-area">
                    <img className="news-img" src={news_1}></img>
                    <div className="news-title"><h1>Title</h1><p>Lwcvferjhfe</p></div>
                    
                </div>
                <div className="news-area">
                    <img className="news-img"  src={news_2}></img>
                    <div className="news-title"><h1>Title</h1><p>Lwcvferjhfe</p></div>
                    
                </div>
            </div>
        </div>

    </div>
}