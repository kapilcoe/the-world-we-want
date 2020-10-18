import React from 'react';
import ImageLoader from '../../ImageLoader';
import news_1 from '../../../images/Ubity_News.jpeg';
import news_2 from '../../../images/Younga_News.jpeg';


export default ({}) => {
    return <div class='news-section-container'>
        <div className="news-header show-on-scroll">GOOD NEWS</div>
            <div className="news-container">
                <div className="news-area">
                    <img height="400px" width='518px' className="news-img" src={news_1}></img>
                    <div className="news-content">
                        <div className="news-title">#WeAreFamily </div>
                        <div className="news-description">The World We Want, in conjunction with Kim Sledge, are releasing a Special Edition Cover version of the group’s timeless hit “We Are Family”, in benefit of the WHO Foundation, and with the support of the World Health Organization, to </div>
                    </div>
                    
                </div>
                <div className="news-area">
                    <img height="400px" width='518px' className="news-img"  src={news_2}></img>
                    <div className="news-content">
                        <div className="news-title">#YOUNGA2020</div>
                        <div className="news-description">The World We Want are the Global Communications & PR partners of YOUNGA2020. Organized by BridgingTheGap Ventures, this first-of-its-kind virtual global youth takeover of the United Nations is focused on a central theme for 2020—the future youth want, the action we need.</div>
                    </div>
                    
                </div>
            </div>

    </div>
}