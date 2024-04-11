import "./index.css"
import map from "../../assets/map.svg";

function Contact_us(){
    return(
        <div className="container">
            <div className="container_contact">
                <h1 className="container_contact--h1">BRIQUINY KOTTO</h1>
                <div className="container_contact_div">
                    <div className="container_contact_div_div">
                        <div className="container_contact_div_div_div1">
                            <p className="container_contact_div_div_div1--p">Situe a :</p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="container_contact_div_div_div2">
                            <p className="container_contact_div_div_div2--p">Tel : </p>
                            <p>Lorem ipsum dolor sit.</p>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="container_contact_div_div_div3">
                            <p className="container_contact_div_div_div3--p">E-mail : </p>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <img src={map} alt="location" />
                </div>
            </div>
        </div>
    )
}

export default Contact_us;