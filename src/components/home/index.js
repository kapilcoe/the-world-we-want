import React from 'react';
import HeroBanner from './HeroBanner';
import GlobalImpact from './sections/GlobalImpact';
import SDGs from './sections/17SDGs';

import './home.css';
import GoodNews from './sections/GoodNews';
import WorldWeWant from './sections/WorldWeWant';
import WhatWeDo from './sections/WhatWeDo';
import PurposeImpact from './sections/PurposeImpact';
export default ({}) => {
    return <div className="home-container">
            <HeroBanner/>
            <GlobalImpact/>
            <SDGs/>
            <PurposeImpact/>
            <WhatWeDo/>
            <WorldWeWant/>
            <GoodNews/>
        </div>
}