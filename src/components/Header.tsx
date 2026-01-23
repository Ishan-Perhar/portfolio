/* Header for all pages*/

import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="site-header">
            <div className="container header-inner">
                <Link to="/" className="logo">
                    Ishan Perhar
                </Link>
                <nav className="nav">
                    <NavLink to="/projects" className="nav-link">
                        Projects
                    </NavLink>

                    <NavLink to="/resume" className="nav-link">
                        Resume
                    </NavLink>

                    <NavLink to="/contact" className="nav-link">
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}