import Navbar from "../../composants/Navbar.jsx";
import Concour from "../../composants/concour.jsx";
import Documents from "../../composants/documents.jsx";

import Resultats from "../../composants/resultats.jsx";
import Scolarite from "../../composants/scolarite.jsx";
import Transport from "../../composants/transport.jsx";
import {useEffect} from "react";

function GSBBriquiny(){
    useEffect(() => {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        if(!token || userId !== "GSB-BRIQUINY"){
            window.location.href = "/"
        }
    }, []);
    return(
        <div className="App">
            <div className="nav-bar">
                <Navbar/>
            </div>
            <div className="app-container">
                <Concour/>
                <Documents/>
                <Resultats/>
                <Scolarite scaleValue={"col"}/>
                <Transport scaleValue={"col"}/>
            </div>
        </div>
    )
}

export default GSBBriquiny