import Date from "../../composants/concour.jsx"
import Inscription from "../../composants/inscription.jsx";
import Navbar from "../../composants/Navbar.jsx";
import Scolarite from "../../composants/scolarite.jsx"
import Transport from "../../composants/transport.jsx";
import Resultats from "../../composants/resultats.jsx";
function Home(){

    return(
        <div className="App">
            <div className="nav-bar">
                <Navbar/>
            </div>
            <div className="app-container">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className="acceuil_message">BIENVENUE SUR LA PAGE D'ADMINISTRATION</h1>
                <Date/>
                <Inscription />
                <Scolarite/>
                <Transport/>
                <Resultats/>
            </div>
        </div>
    )
}


export default Home;
