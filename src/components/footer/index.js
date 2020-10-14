import React from 'react';
import './footer.css';

export default ({}) => {
    return <div className="footer-container">
        <footer class="footer">
            <div class="l-footer">
                <h1>Want to Change the world with us?</h1>
                <p>hello@theworldwewant.com</p>
            </div>
            <div class="r-footer">
                <h1>Find us here</h1>
                <p>12 AST London</p>
                <div class="social-footer">
                    <a href="#"><span class="fa fa-facebook">Facebook</span></a>
                    <a href="#"><span class="fa fa-twitter">Twitter</span></a>
                    <a href="#"><span class="fa fa-insta">Instagram</span></a>
                </div>
            </div>
            <div class="menu-footer">
            <ul className="footer-nav">
                <li><a href="">Who We are</a></li>
                <li><a href="">17 SDGs</a></li>
                <li><a href="">Our Approach</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Work we have done</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">Terms & Conditions</a></li>
                <li><a href="">Anti bribery</a></li>
                
            </ul>
            </div>

            <div class="b-footer">
            <p>All rights reserved by ©CompanyName 2020 </p>
            </div>
        </footer>
    </div>
}