import React from 'react';
import './index.css';
import img1 from '../../images/GlobalsdgPage/E-WEB-Goal-01.png';
import img2 from '../../images/GlobalsdgPage/E-WEB-Goal-02.png';
import img3 from '../../images/GlobalsdgPage/E-WEB-Goal-03.png';
import img4 from '../../images/GlobalsdgPage/E-WEB-Goal-04.png';
import img5 from '../../images/GlobalsdgPage/E-WEB-Goal-05.png';
import img6 from '../../images/GlobalsdgPage/E-WEB-Goal-06.png';
import img7 from '../../images/GlobalsdgPage/E-WEB-Goal-07.png';
import img8 from '../../images/GlobalsdgPage/E-WEB-Goal-08.png';
import img9 from '../../images/GlobalsdgPage/E-WEB-Goal-09.png';
import img10 from '../../images/GlobalsdgPage/E-WEB-Goal-10.png';
import img11 from '../../images/GlobalsdgPage/E-WEB-Goal-11.png';
import img12 from '../../images/GlobalsdgPage/E-WEB-Goal-12.png';
import img13 from '../../images/GlobalsdgPage/E-WEB-Goal-13.png';
import img14 from '../../images/GlobalsdgPage/E-WEB-Goal-14.png';
import img15 from '../../images/GlobalsdgPage/E-WEB-Goal-15.png';
import img16 from '../../images/GlobalsdgPage/E-WEB-Goal-16.png';
import img17 from '../../images/GlobalsdgPage/E-WEB-Goal-17.png';



export default ({}) => {
    return <div className='global-sdgs container'>
        <div className='sdgs-background-image'>
           <div className='sdg-title title-1'>THE 17 <span>GLOBAL GOALS </span></div>
           <div className='sdg-title-description description1'><span>The SDGs were agreed in September 2015 by 193 world leaders. If met, we can end global poverty, reduce inequalities and be the last generation to feel the effects of climate change by 2030.</span><span>With only ten years left to achieve the goals, 2020 marks the ‘decade of delivery’ to escalate efforts, catalyse unprecedented action and launch accelerated policies to convert advocacy into tangible results and help us realise and surpass the global targets.</span><span>Learn more about the goals here, why they matter for people and planet, and what you can do to help accelerate positive change.</span>
           </div>
        </div>
        <div className='section'>
            
            <div className='sdg-img-columns1'>
                <div className='col1'>
                    <img src={img1}></img>
                </div>
                <div className='sdg-multi-img col2'>
                    <img src={img2}></img>
                    <img src={img3}></img>
                    <img src={img4}></img>
                    <img src={img5}></img>
                </div>

            </div>
            <div className='sdg-img-columns2'>
                <div className='sdg-multi-img col1'>
                    <img src={img6}></img>
                    <img src={img7}></img>
                    <img src={img9}></img>
                    <img src={img10}></img>
                </div>
                <div className='col2'>
                    <img src={img8}></img>
                    <div class="sdg-multi-img">
                    <img src={img11}></img>
                    <img src={img12}></img>
                    </div>
                    
                </div>

            </div>
            <div className='sdg-img-columns3'>
                <div className='col1'>
                    <img src={img13}></img>
                </div>
                <div className='sdg-multi-img col2'>
                    <img src={img14}></img>
                    <img src={img15}></img>
                    <img src={img16}></img>
                    <img src={img17}></img>
                </div>

            </div>
        </div>

        
    </div>
}