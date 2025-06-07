import { useEffect, useState } from 'react';
import '../styles/About.css';

const About = () => {
    const filePrefix = '/src/assets/AboutMeCollage/'
    const [currentImage, setCurrentImage] = useState(filePrefix + 'Image1.jpg');
    const [currentImageNum, setCurrentImageNum] = useState(0);
    const collageImages = [
        filePrefix + 'Image1.jpg',
        filePrefix + 'Image2.jpg',
        filePrefix + 'Image3.jpg',
        filePrefix + 'Image4.jpg',
        filePrefix + 'Image5.jpg',
        filePrefix + 'Image6.jpg',
        filePrefix + 'Image7.jpg',
        filePrefix + 'Image8.jpg',
        filePrefix + 'Image9.jpg'
    ];

    useEffect(() => {
        const updateInterval = setInterval(() => {
            setCurrentImageNum(prev => {
                const nextNum = (prev + 1) % collageImages.length;
                setCurrentImage(collageImages[nextNum]);
                return nextNum;
            });
        }, 5000);

        return () => clearInterval(updateInterval);
    }, []);

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
                        who can connect their projects across both themes
                    </span>
                    <span className="about-description-bracket">&#125;</span>
                </div>
                
                <div className="about-image-group">
                    <img id = "aboutimage" key = {currentImageNum} src = {currentImage} alt="DuploHacks event" className="about-image-photo" />
                </div>
            </div>
        </div>
    )
}
export default About
