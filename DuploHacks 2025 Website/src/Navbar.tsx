import './styles/Navbar.css';

export default function Navbar() {
    return (
        <nav className="navBarWrapper">
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
