import { Link, useLocation } from 'react-router-dom';

// function for nav items and links
function Nav() {
    // get current page by looking at URL
    const currentPg = useLocation().pathname;

    return (
        // assign each nav item its appropriate link
        <div className="navbar is-fixed-top">
            <h1 className='title navbar-item pb-0'>Courtney Sienkiewich</h1>
            <ul className="navbar-item pb-0 navbar-end tabs is-boxed is-right is-large">
                <li 
                    // If current page is AboutMe, then css will match
                    className={currentPg === "/" ? "is-active" : ""}>
                    <Link to="/">About Me</Link>
                </li>
                <li className={currentPg === "/ContactMe" ? "is-active" : ""}>
                    <Link to="/ContactMe">Contact Me</Link>
                </li>
                <li className={currentPg === "/Portfolio" ? "is-active" : ""}>
                    <Link to="/Portfolio">Portfolio</Link>
                </li>
                <li className={currentPg === "/Resume" ? "is-active" : ""}>
                    <Link to="/Resume">Resume</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;