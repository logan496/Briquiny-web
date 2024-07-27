import { NavLink, useLocation } from "react-router-dom";
import "./index.css"
import { useEffect, useState } from "react";


function Header(){

    const [activeRoute, setActiveRoute] = useState("")

    const currentRoute = useLocation();

    function ChangeActiveRoute(){
        if(currentRoute.pathname === '/briquiny_kotto'){
            setActiveRoute("/contact_us?active=briquiny_kotto");
        }
        if(currentRoute.pathname === '/briquiny_logbessou'){
            setActiveRoute("/contact_us?active=briquiny_logbessou");
        }
        if(currentRoute.pathname === '/college_briquiny'){
            setActiveRoute("/contact_us?active=college_briquiny");
        }
      }

      useEffect(() => {
        ChangeActiveRoute();
      }, [useLocation().pathname]);

    return(
        <div className="header">
            <NavLink to={"/"} className="header-h1">BRIQUINY</NavLink>
            <div className="header_right">
                <NavLink to={activeRoute} className="header_right_link">Contactez nous</NavLink>
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