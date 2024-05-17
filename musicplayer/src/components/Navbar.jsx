import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper #1e88e5 blue darken-1">
                    <a href="#" className="brand-logo right">Linkin Park Music Player</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <nav>
                            <div className="nav-wrapper #1e88e5 blue darken-1">

                                <ul id="nav-mobile" className="left hide-on-med-and-down">
                                    <li><NavLink to="/library">Library</NavLink></li>
                                    <li><NavLink to="/Player">Player</NavLink></li>
                                </ul>
                            </div>
                        </nav>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

