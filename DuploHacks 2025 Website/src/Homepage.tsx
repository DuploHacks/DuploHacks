import './styles/Homepage.css';
import Navbar from './Navbar';
import Sponsors from './components/sponsors';
import Faq from './components/faq';
import Contact from './components/contact';
import About from './components/about';

export default function Homepage() {
    return (
        <div className="homepageBody">
            <Navbar />
            <section className="heroSection">
                <div className="hero-content">
                    <img src="src/assets/image-removebg-preview.png" alt="DuploHacks" className="hero-logo" />
                    <div className="event-info">
                        <div className="event-location-container">
                            <span className="icon">⬜</span>
                            <span className="event-location">200 University Ave, E7</span>
                        </div>
                        <div className="event-details">
                            <div className="event-row">
                                <span className="icon">📅</span>
                                <span>October 10 - 12th, 2025</span>
                                <span className="separator">|</span>
                                <span className="icon clock-icon">⌚</span>
                                <span>Applications Coming Soon</span>
                            </div>
                        </div>
                        <button className="sponsor-button">Sponsor Us?</button>
                    </div>
                </div>
            </section>
            <section className="aboutSection">
                <About />
            </section>
            <section className="sponsorsSection">
                <Sponsors />
            </section>
            <section className="faqAndContactSection">
                <Faq />
                <Contact />
            </section>
        </div>
    );
}