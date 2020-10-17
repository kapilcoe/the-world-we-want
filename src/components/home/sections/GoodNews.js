import React from 'react';
import ImageLoader from '../../ImageLoader';
import news_1 from '../../../images/news_1.png';
import news_2 from '../../../images/news_2.png';


export default ({}) => {
    return <div class='news-section-container'>
        <div className="news-header">GOOD NEWS</div>
            <div className="news-container">
                <div className="news-area">
                    <ImageLoader height="250px" className="news-img" src={news_1}></ImageLoader>
                    <div className="news-title">Title</div>
                    <div className="news-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    
                </div>
                <div className="news-area">
                    <ImageLoader height="250px" className="news-img"  src={news_2}></ImageLoader>
                    <div className="news-title">Title</div>
                    <div className="news-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    
                </div>
            </div>

    </div>
}