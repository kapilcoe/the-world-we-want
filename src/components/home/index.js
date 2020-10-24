import React from 'react';
import HeroBanner from './HeroBanner';
import GlobalImpact from './sections/GlobalImpact';
import SDGs from './sections/17SDGs';
import OurWork from './sections/OurWork';
import GoodNews from './sections/GoodNews';
import WorldWeWant from './sections/WorldWeWant';
import WhatWeDo from './sections/WhatWeDo';
import PurposeImpact from './sections/PurposeImpact';
import SectionLoader from '../SectionsLoader';
import './home.css';
import WaveSection from './sections/WaveSection';
export default ({}) => {
    return <div className="home-container">
            <HeroBanner/>
            <GlobalImpact/>
            <SDGs/>
            <OurWork/>
            <PurposeImpact/>
            <WhatWeDo/>
            <WorldWeWant/>
            <GoodNews/>
            
        </div>
}