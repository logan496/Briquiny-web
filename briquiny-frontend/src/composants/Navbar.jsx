import { NavLink } from "react-router-dom";
import bar_solid from "../assets/bars-solid.svg";
import { useState } from "react";
import xmark_solid from "../assets/xmark-solid.svg";
import "../styles/Navbar.css";

function Navbar() {
    const [isClicked, setIsClicked] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const svgNotClicked = xmark_solid;
    const svgClicked = bar_solid;

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
        setIsNavbarVisible(!isNavbarVisible);
    };
    
    return (
        <>
            <nav className={`navbar ${isNavbarVisible ? "visible" : ""}`}>
                <div className="nav-container">
                    <h1 className="logo">BRIQUINY</h1>
                    <ul>
                        <li>
                            <NavLink to="/briquiny-kotto" className="nav-link">
                                Briquiny-Kotto
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/briquiny-logbessou" className="nav-link">
                                Briquiny-Logbessou
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/GSB-briquiny" className="nav-link">
                                GSB-Briquiny
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/logout" className="nav-link">
                                <button className="logout" >Logout</button>
                            </NavLink>
                        </li>
                        <select className="lang">
                            <option value="fr">Fr</option>
                            <option value="en">En</option>
                        </select>
                    </ul>
                </div>
            </nav>
            <div
                className={`nav-toggle ${isNavbarVisible ? "" : "top-left"}`}
                onClick={handleButtonClick}
            >
                <img
                    className="nav-toggle-close"
                    src={isClicked ? svgClicked : svgNotClicked}
                />

            </div>
        </>
    );

}

export default Navbar;
