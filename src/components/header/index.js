import React from 'react';
import './header.css';

export default ({}) => {
    return <div className="header-container">
        <nav>
            <div className="logo">
                <img  src="https://theworldwewant.global/wp-content/uploads/2019/08/world-we-want-www-logo-retina.jpg"></img>
            </div>

                <ul className="nav-area">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Insta</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
            <div className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>

            </div>

        </nav>
       

        
    </div>
}