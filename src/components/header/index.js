import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './header.css';
import LogoLight from '../../images/horizontal-logo-light.png';
import FacebookIcon from '../../images/icons/facebook.png';
import InstagramIcon from '../../images/icons/instagram.png';
import TwitterIcon from '../../images/icons/twitter.png';
import HamburgerIcon from '../../images/icons/hamburger.png';

export default ({}) => {
    
    return <div className="header-container">
            <nav className="nav-container">
                <animated.div className="logo"
                >
                    <img src={LogoLight}/>
                </animated.div>

                <ul className="nav-area">
                    <Logo href='https://www.instagram.com/the_worldwewant/?hl=en' icon={FacebookIcon}/>
                    <Logo href='https://www.facebook.com/www.theworldwewant/' icon={InstagramIcon}/>
                    <Logo href='https://twitter.com/The_WorldWeWant' icon={TwitterIcon}/>
                    <li class='burger'><a href="#" target='_blank'><img src={HamburgerIcon}/></a></li>
                </ul>

        </nav>
       

        
    </div>
}

const Logo = (props) => {
    const [hovered, setHovered] = useState(false);
    const logoProps = useSpring({
        from:{transform:  hovered ? 'scale(0.8)' : 'scale(1)'}, transform:  hovered ? 'scale(1.0)' : 'scale(0.8)'
    }, [hovered]);
    return <li onMouseEnter={()=>{console.log('hello'); setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}><a  href={props.href} target='_blank'><animated.img style={logoProps} src={props.icon}></animated.img></a></li>
}