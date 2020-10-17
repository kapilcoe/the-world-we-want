import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import {SDGs} from './constants';
import ImageLoader from '../../ImageLoader';
import SectionsLoader from '../../SectionsLoader';

export default ({}) => {
    const [selectedSDG, setSelectedSDG] = useState(0);
    const blurredSDG1 = selectedSDG === 2 ? 0: selectedSDG+1;
    const blurredSDG2 = blurredSDG1 === 2 ? 0: blurredSDG1+1;
    const blurredSDGS = [SDGs[blurredSDG1], SDGs[blurredSDG2]];

    const [loaded, setIsLoaded] = useState(false);
    console.log({loaded});
    const loadingProps = useSpring({
        opacity: loaded ? 1: 0
    }, [loaded]);

    const onHoverBlurredSDG = sdg => {
        const hoveredSDGIndex =  SDGs.findIndex(s => s == sdg);
        setSelectedSDG(hoveredSDGIndex);
    };
    console.log('rendering 17 SDGs');
    return <SectionsLoader threshold = {0.2} callback={setIsLoaded}><animated.div  class='sdgs-container'>
        <div className='title'>
            THE 17 SDGS
        </div>
        <div className='sdgs'>
            
            {
                SDGs.map(sdg => <FocusedSDG
                    sdg={sdg}
                />)
            }
            {/* <div className='blurred-sdgs-container'>
                {blurredSDGS.map((sdg, idx) => {
                    return <BlurredSDG
                        key={idx}
                        sdg={sdg}
                        onHover={onHoverBlurredSDG.bind(null, sdg)}

                    />
                })}
                </div> */}
            
        
        </div>
        <div className='sdg-description'>

        </div>

    </animated.div>
    </SectionsLoader>
}

const FocusedSDG = ({sdg }) => {
    return <div className='focused-sdg' >
        <ImageLoader height="697px" src={sdg.src}/>
        <div className='name'>{sdg.title}</div>
        <div style={{height: '10px', width:'102%', 'backgroundColor': `${sdg.color}`, 'borderRadius':'8px','marginLeft': '-1%'}}></div>
        <div className='description'>{sdg.subtitle}</div>
        </div>
}

const BlurredSDG = ({sdg,onHover}) => {
    return <div className='blurred-sdg' ><ImageLoader height="550px" onMouseEnter={()=>{}} src={sdg.greyscaleSrc}/>
    <div className='name'>{sdg.title}</div>
    <div style={{height: '3px', width:'102%', 'backgroundColor': `${sdg.color}`, 'marginLeft': '-1%'}}></div>
    </div>
}
