import { useEffect, useState, useRef } from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [atTop, setAtTop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setAtTop(window.scrollY <= 150);
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
        <nav className={`navBarWrapper${atTop ? ' thing' : ''}`} ref={navRef}>
            <div className="nav-left">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    <img src="/src/assets/DuploHacksNoBackground.png" alt="DuploHacks" className="nav-logo" />
                    <span>DuploHacks</span>
                </Link>
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
                <Link className="link" to="/#about" onClick={() => setMenuOpen(false)}>about</Link>
                <Link className="link" to="/team" onClick={() => setMenuOpen(false)}>team</Link>
                <Link className="link" to="/#sponsors" onClick={() => setMenuOpen(false)}>sponsors</Link>
                <Link className="link" to="/#faq" onClick={() => setMenuOpen(false)}>faq</Link>
            </div>
        </nav>
    );
}
