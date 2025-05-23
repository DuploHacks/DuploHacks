import '../styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-header-group">
                <div className="about-title-label">[what is duplohacks?]</div>
                <div className="about-title">
                    About <span className="about-duplohacks-gradient">DuploHacks</span>
                </div>
            </div>

            <div className="about-content-group">
                <div className="about-description">
                    <span className="about-description-bracket">&#123; </span>
                    <span className="about-description-main">
                        DuploHacks is a hackathon by teenagers, for teenagers. Born out of our founders' experiences
                        with repetitive hackathon formats, we decided to shake things up and bring something fresh to
                        the scene. Our unique format features a main theme at kickoff, followed by a surprise second
                        theme revealed halfway through. This challenges hackers to adapt quickly and rewards those
                        who can connect their projects across both themes.
                    </span>
                    <span className="about-description-bracket">&#125;</span>
                </div>

                <div className="about-image-group">
                    <div className="about-image-placeholder"></div>
                    <div className="about-image-caption">located in yadda yadda yadda</div>
                </div>
            </div>
        </div>
    )
}
export default About
