import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/About.css';

const collageImages = [
    new URL('../assets/AboutMeCollage/Image1.jpg', import.meta.url).href,
    new URL('../assets/AboutMeCollage/Image2.jpg', import.meta.url).href,
    new URL('../assets/AboutMeCollage/Image3.jpg', import.meta.url).href,
    new URL('../assets/AboutMeCollage/Image4.jpg', import.meta.url).href,
    new URL('../assets/AboutMeCollage/Image5.jpg', import.meta.url).href,
    new URL('../assets/AboutMeCollage/Image6.jpg', import.meta.url).href,
    new URL('../assets/AboutMeCollage/Image7.jpg', import.meta.url).href,
    new URL('../assets/AboutMeCollage/Image8.jpg', import.meta.url).href,
    new URL('../assets/AboutMeCollage/Image9.jpg', import.meta.url).href,
];

const About = () => {
    const [currentImageNum, setCurrentImageNum] = useState(0);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const updateInterval = setInterval(() => {
            setCurrentImageNum(prev => (prev + 1) % collageImages.length);
        }, 5000);
        return () => clearInterval(updateInterval);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = imageRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        // Max tilt angle
        const maxTilt = 15;
        const tiltX = ((y - centerY) / centerY) * maxTilt;
        const tiltY = ((x - centerX) / centerX) * maxTilt;
        setTilt({ x: tiltX, y: tiltY });
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setIsHovering(false);
    };

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
                    <span className="about-description-main">
                        DuploHacks is a hackathon by teenagers, for teenagers. Born out of our founders' experiences
                        with repetitive hackathon formats, we decided to shake things up and bring something fresh to
                        the scene. Our unique format features a main theme at kickoff, followed by a surprise second
                        theme revealed halfway through. This challenges hackers to adapt quickly and rewards those
                        who can connect their projects across both themes
                    </span>
                </div>
                
                <div className="about-image-group">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImageNum}
                            ref={imageRef}
                            src={collageImages[currentImageNum]}
                            alt="DuploHacks event"
                            className="about-image-photo"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7, ease: 'easeInOut' }}
                            style={{
                                transform: isHovering
                                    ? `rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg)`
                                    : 'rotateX(0deg) rotateY(0deg)',
                                transition: isHovering
                                    ? 'transform 0.1s cubic-bezier(.25,.46,.45,.94), opacity 0.7s'
                                    : 'transform 0.5s cubic-bezier(.25,.46,.45,.94), opacity 0.7s',
                            }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        />
                    </AnimatePresence>
                    <div className="about-image-caption">JamHacks 9</div>
                </div>
            </div>
        </div>
    )
}

export default About;
