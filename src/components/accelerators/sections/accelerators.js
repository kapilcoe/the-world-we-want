import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import { OUR_WORK, SDGs } from './constants';
import SectionsLoader from '../../SectionsLoader';

export default ({}) => {

    return <div className='our-work'>
            <div className='title'>OUR WORK</div>
            <div className='our-work-tiles'>
                {
                    OUR_WORK.map(work => {
                        return <Work work={work}/>
                    })
                }
            </div>
        </div>
}

const Work = ({work}) => {
    const [loaded, setIsLoaded] = useState(false);
    const loadingProps = useSpring({
        opacity: loaded ? 1: 0
    }, [loaded]);

    return            
                <SectionsLoader threshold = {0.2} callback={setIsLoaded}><animated.div  className='tile show-on-scroll'>
                                    <img height='600px' src={work.src}/>
                        <div className='tile-text show-on-scroll'>
                        {
                            work.title1 && <div className='work-title-1'>{work.title1}</div>
                        }
                        <div className='work-title-2 '>{work.title2}</div>
                        {
                            work.title1 && <div className='work-title-3'>{work.title3}</div>
                        }
                        <div className='work-description'>{work.descripton}</div>
                        </div>
            
        </animated.div>
        </SectionsLoader>
}