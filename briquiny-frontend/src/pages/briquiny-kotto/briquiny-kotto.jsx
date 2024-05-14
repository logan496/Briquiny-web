import Concour from "../../composants/concour.jsx";
import Documents from "../../composants/documents.jsx";


import Resultats from "../../composants/resultats.jsx";
import Scolarite from "../../composants/scolarite.jsx";
import Transport from "../../composants/transport.jsx";
import Navbar from "../../composants/Navbar.jsx";
import {useEffect} from "react";
function BriquinyKotto(){
    useEffect(()=>{
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')

        if(!token || userId !== "BRIQUINY-KOTTO"){
            window.location.href = "/"
        }
    }, [])
    // const [isNavbarVisible, setIsNavbarVisible] = userState(true);
    return(

        <div className="App">
            <div className="nav-bar">
                <Navbar/>
            </div>
            <div className="app-container">
                <Concour/>
                <Documents/>
                <Resultats/>
                <Scolarite scaleValue={"kotto"}/>
                <Transport/>
            </div>
        </div>
    )
}

export default BriquinyKotto