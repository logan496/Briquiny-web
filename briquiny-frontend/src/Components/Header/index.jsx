import { NavLink } from "react-router-dom";
import "./index.css"


function Header(){



    return(
        <div className="header">
            <h1 className="header-h1">BRIQUINY</h1>
            <div className="header_right">
                <NavLink to={"contact_us"} className="header_right_link">Contactez nous</NavLink>
            </div>
            <select className="header_language" name="language" id="language">
                <option value="french">fr</option>
                <option value="english">en</option>
            </select>
        </div>
    )
}

export default Header;