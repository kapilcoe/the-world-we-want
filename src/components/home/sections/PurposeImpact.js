import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import whatwedo1 from '../../../images/Whatwedo_1.png';
import whatwedo2 from '../../../images/Whatwedo_2.png';
import SectionsLoader from '../../SectionsLoader';


export default ({}) => {
    const [loaded, setIsLoaded] = useState(false);
    const loadingProps = useSpring({
        opacity: loaded ? 1: 0
    }, [loaded]);
    return <SectionsLoader threshold = {0.4} callback={setIsLoaded}><animated.div  className='purpose-impact-container'>
        <div className='title'>
            PURPOSE + IMPACT
        </div>
        
        <div className='description'>
        {'We help show our clients how they can stay passionate about purpose, while being invested in the impact.'.toUpperCase()}
         </div>
         <div className='pie-container'></div>
    </animated.div>
    </SectionsLoader>
}