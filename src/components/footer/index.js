import React from 'react';
import './footer.css';
import FacebookIcon from '../../images/icons/facebook.png';
import InstagramIcon from '../../images/icons/instagram.png';
import TwitterIcon from '../../images/icons/twitter.png';
export default ({}) => {
    return <div className="footer-container">
        <footer className="footer">
            <div className="l-footer">
                <div className="f-title">Want to Change the world with us?</div>
                <p>hello@theworldwewant.com</p>
                <div className="subscribe-form"><a href="mailto:someone@example.com" className="button"><span>Email Us</span></a></div>
            </div>
            <div className="r-footer">
                <div className="r-footer-title">Find us here</div>
                <p>20-23 Astwood Mews <br/>London <br/>SW7 4DE</p>
                
            </div>
            <div className="social-footer">
                <li><a href="https://www.facebook.com/www.theworldwewant/" target='_blank'><img src={FacebookIcon}/></a></li>
                <li><a href="https://www.instagram.com/the_worldwewant/?hl=en" target='_blank'><img src={InstagramIcon}/></a></li>
                <li><a href="https://twitter.com/The_WorldWeWant" target='_blank'><img src={TwitterIcon}/></a></li>
            </div>
            <div className="menu-footer">
            <ul className="footer-nav">
                <li><a href="">Who We are</a></li>
                <li><a href="">17 SDGs</a></li>
                <li><a href="">Our Approach</a></li>
                <li><a href="">Work we have done</a></li>
                
            </ul>
            </div>
            </footer>
            <div className='footer-copyright'>
                THE WORLD WE WANT COPYRIGHTS
            </div>
    </div>
}