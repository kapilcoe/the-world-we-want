import React, { useState, useEffect } from 'react';
import SectionsLoader from '../../SectionsLoader';
import {animated, useSpring} from 'react-spring';
import {useInterval} from '../../../utils';

export default ({}) => {
    const [loaded, setIsLoaded] = useState(false);
    const [show, set] = useState(false)
    useInterval(() => set(!show), 400);
    const transitions = useSpring({
        from: {  transform: show ? 'scale(1.05)' : 'scale(1)', color: show ? 'orange' : 'blue'},
        transform: !show ? 'scale(1.05)' : 'scale(1)',
        color: !show ? 'orange' : 'blue'
    }, [show])



    return <SectionsLoader callback={setIsLoaded}><animated.div  className='global-impact-container'>
        <div className='title'>
            <div className="home-intro__heading"><span className="l show-on-scroll">A</span> <span className="c show-on-scroll">GLOBAL SOCIAL</span> <span className="r show-on-scroll"></span></div>
            {
                
                <animated.div className='impact show-on-scroll'>IMPACT</animated.div>
            }
            <div className='impact-title-end show-on-scroll'>ENTERPRISE</div>
        </div>
        <div className='subtitle show-on-scroll'>
            <div className='para'>To accelerate the achievement of the United Nations’ Sustainable Development Goals by 2030, through positive action, strategic communication and global connections, creating powerful and sustained social impact.</div>
            <div className='para'>We use the power of purpose, the strength of multi-stakeholder collaborations, our own proprietary initiatives and creative storytelling and strategies to shape policies and priorities and to mobilise action.</div>
        </div>
    </animated.div>
    </SectionsLoader>
}