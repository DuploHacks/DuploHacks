import React, { useEffect, useState } from 'react';
import './styles/Navbar.css';

export default function Navbar() {
    const [atTop, setAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setAtTop(window.scrollY <= 150);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navBarWrapper${atTop ? ' thing' : ''}`}>
            <div className="nav-left">
                <img src="/src/assets/DuploHacksNoBackground.png" alt="DuploHacks" className="nav-logo" />
                <span>DuploHacks</span>
            </div>
            <div className="nav-right">
                <a href="#about">about</a>
                <a href="#team">team</a>
                <a href="#sponsors">sponsors</a>
                <a href="#faq">faq</a>
            </div>
        </nav>
    );
}
