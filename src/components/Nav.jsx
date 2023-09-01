import { Link, useLocation } from 'react-router-dom';


function Nav() {
    // get current page by looking at URL
    const currentPg = useLocation().pathname;

    // assign each nav item its appropriate link
    <ul className="tabs is-right is-large">
        <li 
            // If current page is AboutMe, then css will match
            className={currentPg === "/" ? "is-active" : ""}>
            <Link to="/">About Me</Link>
        </li>
    </ul>
}