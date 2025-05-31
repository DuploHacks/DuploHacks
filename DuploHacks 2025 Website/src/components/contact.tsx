import React from 'react'
import '../styles/Contact.css';
import Instagram from "../assets/Icons/Instagram.png";
import LinkedIn from "../assets/Icons/LinkedIn.png";

const Contact = () => {
    return (
        <>
            <div className="footer-heading">STILL HAVE A QUESTION?</div>
            <div className="centered-white-text">
                REACH OUT TO US AT <span className="centered-white-bold-text"> HELLO@DUPLOHACKS.CA</span>
            </div>

            <div className="Icons">
                <a href="https://www.instagram.com/duplohacks_/" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} alt="Instagram" />
                </a>

                <a href="https://www.linkedin.com/company/duplohacks" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} alt="LinkedIn" />
                </a>
            </div>

            <h4 className="centered-white-text">© DuploHacks 2025</h4>
        </>
    )
}
export default Contact
