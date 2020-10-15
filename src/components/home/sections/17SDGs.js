import React, {useState} from 'react';
import {SDGs} from './constants';

export default ({}) => {
    const [selectedSDG, setSelectedSDG] = useState(0);
    const blurredSDG1 = selectedSDG === 2 ? 0: selectedSDG+1;
    const blurredSDG2 = blurredSDG1 === 2 ? 0: blurredSDG1+1;
    const blurredSDGS = [SDGs[blurredSDG1], SDGs[blurredSDG2]];

    const onHoverBlurredSDG = sdg => {
        const hoveredSDGIndex =  SDGs.findIndex(s => s == sdg);
        setSelectedSDG(hoveredSDGIndex);
    };
    return <div class='sdgs-container'>
        <div className='title'>
            THE 17 SDGS
        </div>
        <div className='sdgs'>
            
            {
                <FocusedSDG
                    sdg={SDGs[selectedSDG]}
                />
            }
            <div className='blurred-sdgs-container'>
                {blurredSDGS.map(sdg => {
                    return <BlurredSDG
                        sdg={sdg}
                        onHover={onHoverBlurredSDG.bind(null, sdg)}

                    />
                })}
                </div>
            
        
        </div>
        <div className='sdg-description'>

        </div>

    </div>
}

const FocusedSDG = ({sdg }) => {
    return <div className='focused-sdg' >
        <img src={sdg.src}/>
        <div className='name'>{sdg.title}</div>
        <div style={{height: '10px', width:'102%', 'background-color': `${sdg.color}`, 'border-radius':'8px','margin-left': '-1%'}}></div>
        <div className='description'>{sdg.subtitle}</div>
        </div>
}

const BlurredSDG = ({sdg,onHover}) => {
    return <div className='blurred-sdg' ><img onMouseEnter={()=>{}} src={sdg.greyscaleSrc}/>
    <div className='name'>{sdg.title}</div>
    <div style={{height: '3px', width:'102%', 'background-color': `${sdg.color}`, 'margin-left': '-1%'}}></div>
    </div>
}