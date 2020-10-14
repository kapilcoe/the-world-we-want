import React from 'react';
import './header.css';

export default ({}) => {
    return <div className="header-container">
        <header>
            <img className="logo" src="https://theworldwewant.global/wp-content/uploads/2019/08/world-we-want-www-logo-retina.jpg"></img>
            <nav>
                <ul className="nav-area">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Insta</a></li>
                    <li><a href="#">Twitter</a></li>
                </ul>
              
            </nav>
            <a href="#" className="btn-area">Hamburger</a>


        </header>
       

        
    </div>
}