import React from 'react';
import './MainHeader.css';

const MainHeader = () => {
    return (
        <div>
            <div className="header" > 
                <a href="https://reecocefe.in">
                    <img 
                        fetchpriority="high" 
                        width="200" 
                        height="50" 
                        src="https://reecocefe.in/wp-content/uploads/2022/09/Reecocefe-Logo.webp" 
                        className="attachment-full  wp-image-987729" 
                        alt="Reecocefe Logo"
                    />
                </a>
                <nav className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Our Services</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Contact</a>
                </nav>
                <button className="contact-btn">Get In Touch</button>
            </div>
            {/* <div className="banner">
                <img src="/images/hr_policy_bg.png" alt="Construction Image" />
                <div className="banner-text">
                    <h2>Payroll Policy</h2>
                </div>
            </div> */}
        </div>
    );
};

export default MainHeader;
