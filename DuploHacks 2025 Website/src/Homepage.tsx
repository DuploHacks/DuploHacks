import './styles/Homepage.css';
import ScrollToHashElement from './components/ScrollToHashElement'
import Navbar from './Navbar';
import Sponsors from './components/sponsors';
import Faq from './components/faq';
import Contact from './components/contact';
import About from './components/about';
import pinIcon from './assets/pinicon.png';
import calendarIcon from './assets/calendaricon.png';
import timeIcon from './assets/timeicon.png';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Homepage() {
    const [dots, setDots] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setDots(prev => {
                if (prev.length >= 3) return '';
                return prev + '.';
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="homepageBody"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <ScrollToHashElement />
            <Navbar />
            <section className="heroSection">
                <div className="hero-background-animation"></div>
                <div className="hero-content">
                    <div className="titleSection">
                        <p className="title">DuploHacks</p>
                    </div>
                    <div className="event-info">
                        <div className="event-location-container">
                            <img className="icon" src={pinIcon} loading="lazy" />
                            <span className="event-location">
                                To Be Announced Soon
                                <span className="animated-dots">{dots}</span>
                            </span>
                        </div>
                        <div className="event-details">
                            <div className="event-row">
                                <img className="icon" src={calendarIcon} loading="lazy" />
                                <span>October 10 - 12th, 2025</span>
                                <span className="separator">|</span>
                                <img className="icon" src={timeIcon} loading="lazy" />
                                <span>Applications Coming Soon</span>
                            </div>
                        </div>
                        <a
                            className="sponsor-button"
                            href="mailto:HELLO@DUPLOHACKS.CA"
                        >
                            <svg className="sponsor-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Sponsor Us?
                        </a>
                    </div>
                </div>
            </section>
            <section className="aboutSection" id="about">
                <About />
            </section>
            <section className="sponsorsSection" id="sponsors">
                <Sponsors />
            </section>
            <section className="faqAndContactSection" id="faq">
                <Faq />
                <Contact />
            </section>
        </motion.div>
    );
}