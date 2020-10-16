import React from 'react';
import { useSpring, animated } from 'react-spring';
import './header.css';
import LogoLight from '../../images/horizontal-logo-light.png';
import FacebookIcon from '../../images/icons/facebook.png';
import InstagramIcon from '../../images/icons/instagram.png';
import TwitterIcon from '../../images/icons/twitter.png';
import HamburgerIcon from '../../images/icons/hamburger.png';

export default ({}) => {
    const logoProps = useSpring({from:{x:0}, x: 1});
    return <div className="header-container">
            <nav className="nav-container">
                <animated.div className="logo"
                >
                    <img src={LogoLight}/>
                </animated.div>

                <ul className="nav-area">
                    <li><a href="#"><img src={FacebookIcon}/></a></li>
                    <li><a href="#"><img src={InstagramIcon}/></a></li>
                    <li><a href="#"><img src={TwitterIcon}/></a></li>
                    <li class='burger'><a href="#"><img src={HamburgerIcon}/></a></li>
                </ul>

        </nav>
       

        
    </div>
}