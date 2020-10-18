import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import SectionsLoader from '../../SectionsLoader';
import PurposeImage from '../../../images/pi_White-01.png';


export default ({}) => {
    const [loaded, setIsLoaded] = useState(false);
    const loadingProps = useSpring({
        opacity: loaded ? 1: 0
    }, [loaded]);
    return <SectionsLoader threshold = {0.4} callback={setIsLoaded}><animated.div  className='purpose-impact-container'>
        <div className='title'>
           <img className="purpose-img" src={PurposeImage}></img>
        </div>
        
        <div className='description'>
        {'We help show our clients how they can stay passionate about purpose, while being invested in the impact.'.toUpperCase()}
         </div>
         {/* <div className='pie-container'></div> */}
    </animated.div>
    </SectionsLoader>
}