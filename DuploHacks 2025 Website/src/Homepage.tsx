import React from "react";
import './styles/Homepage.css';
import Navbar from './Navbar';
import Faq from './components/faq';

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
                </section>
            {/* Sponsors Section */}
                <section className="sponsorsSection">
                </section>
            {/* FAQ Section */}
                <section className="faqsSection">
                    <Faq />
                </section>
            {/* Contact Section */}
                <section className="contactSection">
                </section>
        </div>
    );
}