import './styles/Homepage.css';
import Navbar from './Navbar';
import Sponsors from './components/sponsors';
import Faq from './components/faq';
import Contact from './components/contact';
import About from './components/about';
import pinIcon from './assets/pinicon.png';
import calendarIcon from './assets/calendaricon.png';
import timeIcon from './assets/timeicon.png';

export default function Homepage() {
    return (
        <div className="homepageBody">
            <Navbar />
            <section className="heroSection">
                <div className="hero-content">
                    <div className="titleSection">
                        <p className="title">DuploHacks</p>
                    </div>
                    <div className="event-info">
                        <div className="event-location-container">
                            <img className="icon" src={pinIcon} />
                            <span className="event-location">To Be Announced Soon...</span>
                        </div>
                        <div className="event-details">
                            <div className="event-row">
                                <img className="icon" src={calendarIcon} />
                                <span>October 10 - 12th, 2025</span>
                                <span className="separator">|</span>
                                <img className="icon" src={timeIcon} />
                                <span>Applications Coming Soon</span>
                            </div>
                        </div>
                        <button className="sponsor-button" onClick={() => window.location.href = 'mailto:hello@duplohacks.ca'}>Sponsor Us?</button>
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
        </div>
    );
}