import { NavLink } from "react-router-dom";
import "./index.css"


function Header(){



    return(
        <div className="header">
            <h1 className="header-h1">BRIQUINY</h1>
            <div className="header_right">
                <NavLink to={"contact_us"} className="header_right_link">Contactez nous</NavLink>
                <NavLink to={"/briquiny_kotto"} className="header_right_link">Briquiny Kotto</NavLink>
                <NavLink to={"/briquiny_logbessou"} className="header_right_link">Briquiny Logbessou</NavLink>
                <NavLink to={"/college_briquiny"} className="header_right_link">College Briquiny</NavLink>
            </div>
            <select className="header_language" name="language" id="language">
                <option value="french">fr</option>
                <option value="english">en</option>
            </select>
        </div>
    )
}

export default Header;