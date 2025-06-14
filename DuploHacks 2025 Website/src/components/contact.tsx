import React from 'react'
import '../styles/Contact.css';
import Instagram from "../assets/Icons/Instagram.png";
import LinkedIn from "../assets/Icons/LinkedIn.png";

const Contact = () => {
    return (
        <>
            <div className="heading-container">
                <div className="footer-heading">STILL HAVE A QUESTION?</div>
                <div className="centered-white-text">
                    REACH OUT TO US AT <span className="centered-white-bold-text"> HELLO@DUPLOHACKS.CA</span>
                </div>
            </div>
            <hr className="footer-divider"/>
            <div className="footer-bar">
                <div className="footer-left">
                    <span className="white-link">Made with 💜 by the DuploHacks Team</span>
                </div>
                <div className="footer-center">
                    <a href="https://www.instagram.com/duplohacks_/" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt="Instagram" className="footer-icon" />
                    </a>
                    <a href="https://www.linkedin.com/company/duplohacks" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} alt="LinkedIn" className="footer-icon" />
                    </a>
                </div>
                <div className="footer-right">
                    <span className="footer-copyright">© DuploHacks 2025</span>
                </div>
            </div>
        </>
    )
}
export default Contact
