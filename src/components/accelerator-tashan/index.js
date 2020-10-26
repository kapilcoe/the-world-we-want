import React from 'react';
import './index.css';
import img1 from '../../images/accelerators/daniela-davila-58FCfyUti_w-unsplash.png'
import img2 from '../../images/accelerators/utopia-by-cho-SZzAEl8fpGQ-unsplash.png'
import img3 from '../../images/accelerators/ahmed-carter-GP3-QpmTgPk-unsplash.png'
import img4 from '../../images/accelerators/jean-vella-kNsAF3gcyeY-unsplash.png'
import img5 from '../../images/accelerators/shayan-rti-PyQG7feNXag-unsplash.png'


export default ({}) => {
    return <div className='popculture-div container'>
    <div className='tashan-background-image'>
       <div className='tashan-title title-1'>TASHAN</div>
      
    </div>
    <div className='popculture-section'>
        <div className='popculture-detail'>
            <div className='popculture-text'>
                <div className='popculture-head'>Who</div>
                <div className='popculture-description'>Humans and Habitats. A connected world brings with it a never - before range of lifestyle benefits – but at a great cost to the planet we all live on. Harmful single use plastics on the one hand and the unsustainable fast fashion trend on the other are impacting the industry as a whole. Time to change that.
                </div>
           
            </div>
            <div className='popculture-img'>
                <img src={img1}></img>
            </div>
        </div>
        <div className='popculture-detail'>
            <div className='popculture-text'>
                <div className='popculture-head popculture-line'>What</div>
                <div className='popculture-description'>
                Sustainable fashion and wellness. We are creating Tashan as a noble model for retail. It will be an ethical lifestyle and wellness brand centred around a planet - conscious way of life. Tashan, with its core value of creating style with substance, will focus on sustainably sourced and ethically created couture for the modern consumer.
                </div>
           
            </div>
            <div className='popculture-img'>
                <img src={img2}></img>
            </div>
        </div>
        <div className='popculture-detail'>
            <div className='popculture-text'>
                <div className='popculture-head popculture-line'>When</div>
                <div className='popculture-description'>
                Sustainable fashion and wellness. We are creating Tashan as a noble model for retail. It will be an ethical lifestyle and wellness brand centred around a planet - conscious way of life. Tashan, with its core value of creating style with substance, will focus on sustainably sourced and ethically created couture for the modern consumer.
                </div>
           
            </div>
            <div className='popculture-img'>
                <img src={img3}></img>
            </div>
        </div>
        <div className='popculture-detail'>
            <div className='popculture-text'>
                <div className='popculture-head popculture-line'>Where</div>
                <div className='popculture-description'>
                Throughout the retail supply chain. Cutting ethical corners is no longer an option. We’re joining the clarion call for sustainability right across the board and right down the assembly line.
                </div>
           
            </div>
            <div className='popculture-img'>
                <img src={img4}></img>
            </div>
        </div>
        <div className='popculture-detail'>
            <div className='popculture-text'>
                <div className='popculture-head popculture-line'>Why</div>
                <div className='popculture-description'>
                A cleaner conscience. Going forward, every product will be defined by the way it was sustainably sourced, shaped, sold. It will be judged by its adherence to ethical norms, its commitment to fair business practices and its planet - friendly professionalism.
                </div>
           
            </div>
            <div className='popculture-img'>
                <img src={img5}></img>
            </div>
        </div>

        
      
    </div>

    
</div>
}