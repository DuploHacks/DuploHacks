import React from 'react'
import '../styles/Contact.css';
import Instagram from "../assets/Icons/Instagram.png";
import LinkedIn from "../assets/Icons/LinkedIn.png";
import Website from "../assets/Icons/website.png";
import Mail from "../assets/Icons/mail.png";
import Logo from "../assets/DuploHacksNoBackground.png";

const Contact = () => {
    return (
        <>
            <div className="heading-container">
                <div className="footer-heading">STILL HAVE A QUESTION?</div>
                <div className="centered-white-text">
                    REACH OUT TO US AT <span className="centered-white-bold-text"> HELLO@DUPLOHACKS.CA</span>
                </div>
            </div>
            <footer className="footer-container">
                <div className="footer-left">
                    <img src={Logo} alt="DuploHacks Logo" className="footer-logo" />
                    <div>
                        <div className="footer-title">DuploHacks</div>
                        <div className="footer-powered">Made with 💜 by the DuploHacks Team</div>
                    </div>
                </div>
                <div className="footer-center">
                    <div className="footer-copyright">© 2025 DuploHacks. All rights reserved.</div>
                    <div className="footer-socials">
                        <img src={Website} alt="Website" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={LinkedIn} alt="LinkedIn" />
                        <img src={Mail} alt="Mail" />
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-links">
                        <a href="#about">About</a>
                        <a href="https://duplohacks.ca/team">Team</a>
                        <a href="#sponsors">Sponsors</a>
                        <a href="#faq">FAQs</a>

                    </div>
                    <div className="footer-links-bottom">
                        <a href="#">Sponsor Us</a>
                        <a href="#">Code Of Conduct</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Contact
