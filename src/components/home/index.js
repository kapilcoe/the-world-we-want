import React from 'react';
import HeroBanner from './HeroBanner';
import GlobalImpact from './sections/GlobalImpact';
import './home.css';
export default ({}) => {
    return <div className="home-container">
            <HeroBanner/>
            <GlobalImpact/>
        </div>
}