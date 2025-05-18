import React from "react";
import './styles/Homepage.css';
import Navbar from './Navbar';
import Sponsors from './components/sponsors';
import Faq from './components/faq';
import Contact from './components/contact';
import About from './components/about';

export default function Homepage() {
    return (
        <div className="homepageBody">
            {/* Navigation Bar */}
                <Navbar />
            {/* Hero Section */}
                <section className="heroSection">
                </section>
            {/* About Section */}
                <section className="aboutSection">
                    <About />
                </section>
            {/* Sponsors Section */}
                <section className="sponsorsSection">
                    <Sponsors />
                </section>
            {/* FAQ Section & Contact Section */}
                <section className="faqAndContactSection">
                    <Faq />
                    <Contact />
                </section>
        </div>
    );
}