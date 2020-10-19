import React, { useState,useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './header.css';
import LogoLight from '../../images/horizontal-logo-light.png';
import FacebookIcon from '../../images/icons/facebook.png';
import InstagramIcon from '../../images/icons/instagram.png';
import TwitterIcon from '../../images/icons/twitter.png';
import HamburgerIcon from '../../images/icons/hamburger.png';
import HamburgerClosedIcon from '../../images/icons/hamburger-closed.png';
import DownArrowIcon from '../../images/icons/down-triangle.png';
import {headerscrolled} from '../../utils';


const Header = ({sideMenuHeader, setShowSideMenu}) => {
    
    return <div className="header-container">
            <nav className="nav-container">
                <animated.div className="logo"
                >
                    {!sideMenuHeader && <img src={LogoLight}/>}
                </animated.div>

                <ul className="nav-area">
                    <Logo href='https://www.facebook.com/www.theworldwewant/' icon={FacebookIcon}/>
                    <Logo href='https://www.instagram.com/the_worldwewant/?hl=en' icon={InstagramIcon}/>
                    <Logo href='https://twitter.com/The_WorldWeWant' icon={TwitterIcon}/>
                    {/* <li onClick={() => {setShowSideMenu(sideMenuHeader ? false: true )}} class='burger'><a target='_blank'><img src={sideMenuHeader ? HamburgerClosedIcon : HamburgerIcon}/></a></li> */}
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

const SIDE_MENU_ITEMS = [
    {title: 'WHO WE ARE?', link: false, subtitles: [{title:'OUR PLEDGE, OUR PROMISE', link: '#'}, {title:'OUR VALUES', link: '#'}, {title:"FOUNDER'S INSIGHT", link: '#'}]},
    {title: '17 SDGS', link: '#', subtitles: false},
    {title: 'OUR WORK', link: '#', subtitles: false},
    {title: 'OUR APPROACH', link: false, subtitles: [{title:'PURPOSE + IMPACT', link: '#'}, {title:'BELIEF MARK', link: '#'}, {title:'GO-LAB', link: '#'}]},
    {title: 'SERVICES', link: '#', subtitles: false},
    {title: 'CONTACT US', link: '#', subtitles: false}
];


const SideMenu = ({show, setShowSideMenu}) => {
    const props =  useSpring({
        from: {
            right: show ? '-100vw': '0vw'
        },
        right: show ? '0vw': '-100vw'
    })
    return <animated.div style={props} className='side-menu'>
            <Header sideMenuHeader={true} setShowSideMenu={setShowSideMenu}/>
            <div className='side-menu-items-container'>
                {
                    SIDE_MENU_ITEMS.map((val, idx) => {
                        return <SidMenuItem key={idx} data={val}></SidMenuItem>
                    })
                }
            </div>
        </animated.div>
}

const SidMenuItem = ({data}) => {
    const [open, toggle] = useState(false);
    const subtitlesProps = useSpring({
        from: {
            height: !open ? '265px': '0px',
            opacity: !open ? 1 : 0
        },
        height: open ? '265px': '0px',
        opacity: open ? 1 : 0
    });

    const arrowProps = useSpring({
        from: {
            tranform: open ? 'rotateZ(90deg)': 'rotateZ(0deg)',
        },
        tranform: !open ? 'rotateZ(90deg)': 'rotateZ(0deg)'
    });

    return <div className='side-menu-item'>
        <a href={data.link}>{data.title} </a>
        {data.subtitles && <span style={{position: 'relative'}}><img style={arrowProps} style={{position: 'absolute', top: '25px', left: '15px',transform: open ? 'rotateZ(180deg)': 'none'}} onClick={()=>{toggle(!open)}} src={DownArrowIcon}></img></span>}
        {
            data.subtitles && <animated.div style={subtitlesProps} class='sidebar-subtitles-container'>
                    {data.subtitles.map((subtitle, idx) => {
                        return <div key={idx} class='sidebar-subtitle'><a href={subtitle.link}>{subtitle.title}</a></div>
                    })}
                </animated.div>
        }
        </div>
}

export default () => {
    const [showSideMenu, setShowSideMenu] = useState(false);
    useEffect(() => {
        headerscrolled();
    }, []);
    return <>
        <Header setShowSideMenu={setShowSideMenu}/>
        <SideMenu show={showSideMenu} setShowSideMenu={setShowSideMenu}/>
    </>
};