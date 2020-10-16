import React, { useState } from 'react';
import SectionsLoader from '../../SectionsLoader';
import {useSpring, animated} from 'react-spring';

export default ({}) => {
    const [loaded, setIsLoaded] = useState(false);
    const loadingProps = useSpring({
        from: {
            opacity: loaded? 0: 1
        },
        opacity: loaded ? 1: 0
    }, [loaded]);
    return <SectionsLoader callback={setIsLoaded}><animated.div style={loadingProps} className='global-impact-container'>
        <div className='title'>
            <div>A GLOBAL SOCIAL</div>
            <div className='impact'>IMPACT</div>
            <div>ENTERPRISE</div>
        </div>
        <div className='subtitle'>
            <div className='para'>To accelerate the achievement of the United Nations’ Sustainable Development Goals by 2030, through positive action, strategic communication and global connections, creating powerful and sustained social impact.</div>
            <div className='para'>We use the power of purpose, the strength of multi-stakeholder collaborations, our own proprietary initiatives and creative storytelling and strategies to shape policies and priorities and to mobilise action.</div>
        </div>
    </animated.div>
    </SectionsLoader>
}