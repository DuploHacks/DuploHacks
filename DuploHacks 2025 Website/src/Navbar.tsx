import React, { useEffect, useState, useRef } from 'react';
import './styles/Navbar.css';
import duploLogo from './assets/DuploHacksNoBackground.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [atTop, setAtTop] = useState(true);
    const [navBarOpacity, setNavBarOpacity] = useState(1);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const navBarTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setAtTop(window.scrollY <= 150);
            setNavBarOpacity(0.5);

            if (navBarTimeoutRef.current) {
                clearTimeout(navBarTimeoutRef.current);
            }

            navBarTimeoutRef.current = setTimeout(() => {
                setNavBarOpacity(0.85);
            }, 150);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900 && menuOpen) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [menuOpen]);

    useEffect(() => {
        if (!menuOpen) return;
        const handleClick = (e: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [menuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    return (
        <nav className={`navBarWrapper${atTop ? ' attop' : ''}`} ref={navRef} style = { {opacity: navBarOpacity} }>
            <div className="nav-left">
                <img src={duploLogo} alt="DuploHacks" className="nav-logo" />
            </div>
            <button 
                className={`nav-hamburger${menuOpen ? ' open' : ''}`} 
                onClick={() => setMenuOpen(!menuOpen)} 
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
            >
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
                <span className="hamburger-bar"></span>
            </button>
            <div className={`nav-right${menuOpen ? ' open' : ''}`}> 
                <a className="link" href="#about" onClick={() => setMenuOpen(false)}>about</a>
                <Link className="link" to="/team" onClick={() => setMenuOpen(false)}>team</Link>
                <Link className="link" to="/#sponsors" onClick={() => setMenuOpen(false)}>sponsors</Link>
                <Link className="link" to="/#faq" onClick={() => setMenuOpen(false)}>faq</Link>
            </div>
        </nav>
    );
}