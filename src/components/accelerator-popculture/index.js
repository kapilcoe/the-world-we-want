import React from 'react';
import './index.css';
import img1 from '../../images/accelerators/160521SOUTHAFRICA-Projectforeveryone-2137.png'


export default ({}) => {
    return <div className='popculture container'>
        <div className='popculture-background-image'>
           <div className='title title-1'>PopCultu<span>re4Good </span></div>
        </div>
        <div className='section'>
            
            <div className='columns1'>
                <div className='col1'>
                  <div className="poculture-text-section">
                      <div className="poculture-title">Who</div>
                      <div className="poculture-description">Celebrities. We’re tapping A- listers, tinsel - towners, chart - toppers. By harnessing the benevolent power of celebrity and popular culture, we develop national and international communication strategies.</div>
                    </div>
                </div>
                <div className='col2'>
                  <div className="popculture-img">
                      <img src={img1}></img>
                  </div>
                </div>

            </div>
           
           
        </div>

        
    </div>
}