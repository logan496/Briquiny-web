import { useEffect } from "react";
import "./index.css"

function Header(){

    console.log(window.screen.width);

    function modifieHeader(){
        
    }

    useEffect(() =>{
        console.log("Is ok !")
    }, [])

    return(
        <div className="header">
            <h1 className="header-h1">BRIQUINY</h1>
            <select className="header_language" name="language" id="language">
                <option value="french">fr</option>
                <option value="english">en</option>
            </select>
        </div>
    )
}

export default Header;