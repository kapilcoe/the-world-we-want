import React from 'react';
import { OUR_WORK, SDGs } from './constants';

export default ({}) => {
    return <div className='our-work'>
            <div className='title'>OUR WORK</div>
            <div className='our-work-tiles'>
                {
                    OUR_WORK.map(work => {
                        return <div className='tile'>
                            <img src={work.src}/>
                            <div className='tile-text'>
                            {
                                work.title1 && <div className='work-title-1'>{work.title1}</div>
                            }
                            <div className='work-title-2'>{work.title2}</div>
                            <div className='work-description'>{work.descripton}</div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
}